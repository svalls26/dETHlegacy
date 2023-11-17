"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@typechain/hardhat");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("hardhat-deploy");
const dotenv_1 = __importDefault(require("dotenv"));
const yargs_1 = __importDefault(require("yargs"));
require("hardhat-change-network");
const { network } = yargs_1.default
    .option("network", {
    type: "string",
    default: "hardhat",
})
    .help(false)
    .version(false)
    .parseSync();
// Load environment variables.
dotenv_1.default.config();
const { INFURA_KEY, MNEMONIC, ETHERSCAN_API_KEY, PK, ALCHEMY_KEY } = process.env;
require("./src/tasks/singleton-deployment");
require("./src/tasks/deploy-replay");
const DEFAULT_MNEMONIC = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
const sharedNetworkConfig = {};
if (PK) {
    sharedNetworkConfig.accounts = [PK];
}
else {
    sharedNetworkConfig.accounts = {
        mnemonic: MNEMONIC || DEFAULT_MNEMONIC,
    };
}
if (["mainnet", "goerli", "ropsten"].includes(network) &&
    INFURA_KEY === undefined) {
    throw new Error(`Could not find Infura key in env, unable to connect to network ${network}`);
}
exports.default = {
    paths: {
        artifacts: "build/artifacts",
        cache: "build/cache",
        deploy: "src/deploy",
        sources: "contracts",
    },
    solidity: {
        compilers: [
            {
                version: "0.8.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            { version: "0.6.12" },
        ],
    },
    networks: {
        mainnet: {
            ...sharedNetworkConfig,
            url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
        },
        gnosis: {
            ...sharedNetworkConfig,
            url: "https://rpc.gnosischain.com",
        },
        goerli: {
            ...sharedNetworkConfig,
            url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
        },
        arbitrum: {
            ...sharedNetworkConfig,
            url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
        },
        optimism: {
            ...sharedNetworkConfig,
            url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
        },
        polygon: {
            ...sharedNetworkConfig,
            url: "https://rpc.ankr.com/polygon",
        },
        mumbai: {
            ...sharedNetworkConfig,
            url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
        },
        avalanche: {
            ...sharedNetworkConfig,
            url: `https://avalanche-mainnet.infura.io/v3/${INFURA_KEY}`,
        },
        bsc: {
            ...sharedNetworkConfig,
            url: "https://bsc-dataseed.binance.org",
        },
    },
    namedAccounts: {
        deployer: 0,
    },
    mocha: {
        timeout: 2000000,
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};
