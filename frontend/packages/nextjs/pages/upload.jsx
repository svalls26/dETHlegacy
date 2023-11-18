import { useState } from "react";
import Link from "next/link";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { MetaHeader } from "~~/components/MetaHeader";

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
    <>
      <MetaHeader title="Upload" description="Upload death cert" />
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
          <div className="bg-base-300 w-full mt-16 px-8 py-12 flex justify-center">
            {uploadedImages.map((image, index) => (
              <div key={image.cid.toString() + index} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}
                    alt={`Uploaded #${index + 1}`}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cert #{index + 1}</h2>
                  {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                  <div className="card-actions">
                    <Link href={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}>
                      <button className="btn btn-primary">IPFS Link</button>
                    </Link>
                  </div>
                </div>
              </div>
              // <div key={image.cid.toString() + index}>
              //   <Image
              //     className=""
              //     alt={`Uploaded #${index + 1}`}
              //     src={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}
              //     width={500}
              //     height={500}
              //   />
              //   <h4>Link to IPFS:</h4>
              //   <a href={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}>
              //     <h3>{`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}</h3>
              //   </a>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
