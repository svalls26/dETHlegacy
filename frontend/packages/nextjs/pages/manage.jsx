import { MetaHeader } from "~~/components/MetaHeader";

function App() {
  return (
    <>
      <MetaHeader title="Manage" description="Distribute assets" />
      <div className="container">
        <div className="flex items-center flex-col flex-grow pt-10">
          <div className="px-5">
            <h1 className="text-center mb-8">
              <span className="block text-4xl font-bold mb-2">dETH Legacy</span>
              <span className="block text-2xl">Manage Assets</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
