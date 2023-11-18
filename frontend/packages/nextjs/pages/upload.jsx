import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_KEY;
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });

  const onSubmitHandler = async event => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    // upload files
    const result = await ipfs.add(file);

    setUploadedImages([
      ...uploadedImages,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    form.reset();
  };

  return (
    <div className="app">
      <div className="app__container">
        {ipfs ? (
          <div className="container">
            <div className="flex items-center flex-col flex-grow pt-10">
              <div className="px-5">
                <h1 className="text-center mb-8">
                  <span className="block text-4xl font-bold mb-2">dETH Legacy</span>
                  <span className="block text-2xl">Upload Certificate</span>
                </h1>
              </div>
              <form onSubmit={onSubmitHandler}>
                <div className="flex flex-col">
                  <input
                    id="file-upload"
                    type="file"
                    name="file"
                    className="file-input file-input-bordered file-input-info w-full max-w-xs"
                  />
                  <button className="btn btn-primary mt-5" type="submit">
                    Upload file
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
        <div className="data">
          {uploadedImages.map((image, index) => (
            <div key={image.cid.toString() + index}>
              <img
                className="image"
                alt={`Uploaded #${index + 1}`}
                src={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}
                style={{ maxWidth: "400px", margin: "15px" }}
              />
              <h4>Link to IPFS:</h4>
              <a href={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}>
                <h3>{`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
