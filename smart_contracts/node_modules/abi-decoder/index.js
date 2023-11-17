const { sha3, BN } = require("web3-utils");
const abiCoder = require("web3-eth-abi");

const state = {
  savedABIs: [],
  methodIDs: {},
};

function _getABIs() {
  return state.savedABIs;
}

function _addABI(abiArray) {
  if (Array.isArray(abiArray)) {
    // Iterate new abi to generate method id"s
    abiArray.map(function(abi) {
      if (abi.name) {
        let signature;
        if (abi.type === "event") {
          signature = abiCoder.encodeFunctionSignature(abi);
        } else {
          signature = abiCoder.encodeEventSignature(abi);
        }

        if (abi.type === "event") {
          state.methodIDs[signature.slice(2)] = abi;
        } else {
          state.methodIDs[signature.slice(2, 10)] = abi;
        }
      }
    });

    state.savedABIs = state.savedABIs.concat(abiArray);
  } else {
    throw new Error("Expected ABI array, got " + typeof abiArray);
  }
}

function _removeABI(abiArray) {
  if (Array.isArray(abiArray)) {
    // Iterate new abi to generate method id"s
    abiArray.map(function(abi) {
      if (abi.name) {
        let signature;
        if (abi.type === "event") {
          signature = abiCoder.encodeFunctionSignature(abi);
        } else {
          signature = abiCoder.encodeEventSignature(abi);
        }


        if (abi.type === "event") {
          if (state.methodIDs[signature.slice(2)]) {
            delete state.methodIDs[signature.slice(2)];
          }
        } else {
          if (state.methodIDs[signature.slice(2, 10)]) {
            delete state.methodIDs[signature.slice(2, 10)];
          }
        }
      }
    });
  } else {
    throw new Error("Expected ABI array, got " + typeof abiArray);
  }
}

function _getMethodIDs() {
  return state.methodIDs;
}

function _isArrayKey(key) {
  return /^\d+$/.test(key) || key === "__length__";
}

function _isArray(obj) {
  if (!Array.isArray(obj)) {
    return false;
  }

  return Object.keys(obj).every(value => {
    return _isArrayKey(value);
  });
}

function _cleanObject(obj) {
  if (_isArray(obj)) {

    // Return an array with all of the elements recursively cleaned.
    const cleanedArray = [];
    for (const elt of obj) {
      cleanedArray.push(_cleanObject(elt));
    }
    return cleanedArray;
  } else if (typeof obj === "object") {

    // Remove all of the array-style keys, and clean the values for the non array-style keys.
    const cleanedObject = {}; 
    for (const [key, value] of Object.entries(obj)) {
      // Only keep keys that are not array keys.
      if (!_isArrayKey(key)) {
        cleanedObject[key] = _cleanObject(value);
      }
    }

    return cleanedObject;
  } else {
    // If the object is not an array or an object, we assume it's a primative and return it.
    return obj;
  }
}

function _decodeMethod(data) {
  const methodID = data.slice(2, 10);
  const abiItem = state.methodIDs[methodID];

  if (abiItem) {
    return {
      name: abiItem.name,
      params: _cleanObject(abiCoder.decodeParameters(abiItem.inputs, data.slice(10)))
    };
  }
}

function _decodeLogs(logs) {
  return logs.filter(log => log.topics.length > 0).map((logItem) => {
    const methodID = logItem.topics[0].slice(2);
    const method = state.methodIDs[methodID];
    if (method) {
      const logData = logItem.data;
      let decodedParams = [];
      let dataIndex = 0;
      let topicsIndex = 1;

      let dataTypes = [];
      method.inputs.map(function(input) {
        if (!input.indexed) {
          dataTypes.push(input.type);
        }
      });

      const decodedData = abiCoder.decodeParameters(
        dataTypes,
        logData.slice(2)
      );

      // Loop topic and data to get the params
      method.inputs.map(function(param) {
        let decodedP = {
          name: param.name,
          type: param.type,
        };

        if (param.indexed) {
          decodedP.value = logItem.topics[topicsIndex];
          topicsIndex++;
        } else {
          decodedP.value = decodedData[dataIndex];
          dataIndex++;
        }

        if (param.type === "address") {
          decodedP.value = decodedP.value.toLowerCase();
          // 42 because len(0x) + 40
          if (decodedP.value.length > 42) {
            let toRemove = decodedP.value.length - 42;
            let temp = decodedP.value.split("");
            temp.splice(2, toRemove);
            decodedP.value = temp.join("");
          }
        }

        if (
          param.type === "uint256" ||
          param.type === "uint8" ||
          param.type === "int"
        ) {
          // ensure to remove leading 0x for hex numbers
          if (typeof decodedP.value === "string" && decodedP.value.startsWith("0x")) {
            decodedP.value = new BN(decodedP.value.slice(2), 16).toString(10);
          } else {
            decodedP.value = new BN(decodedP.value).toString(10);
          }
          
        }

        decodedParams.push(decodedP);
      });

      return {
        name: method.name,
        events: decodedParams,
        address: logItem.address,
      };
    }
  });
}

module.exports = {
  getABIs: _getABIs,
  addABI: _addABI,
  getMethodIDs: _getMethodIDs,
  decodeMethod: _decodeMethod,
  decodeLogs: _decodeLogs,
  removeABI: _removeABI,
};
