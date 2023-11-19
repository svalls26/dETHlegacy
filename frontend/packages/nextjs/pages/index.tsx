import Link from "next/link";
import type { NextPage } from "next";
import { CloudArrowUpIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">dETH Legacy</span>
          </h1>
          <p className="text-center text-lg">Life has to end. Your assets don&apos;t.</p>
          <p className="text-center text-lg">Distribute your assets to loved ones, or give back to society</p>
        </div>

        <div className="bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              {/* <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl"> */}
              <PencilSquareIcon className="h-8 w-8 fill-secondary" />
              <Link href="/manage">
                <button className="btn btn-accent btn-sm mt-3">Manage Assets</button>
              </Link>
              {/* </div> */}
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              {/* <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl"> */}
              <CloudArrowUpIcon className="h-8 w-8 fill-secondary" />
              <Link href="/upload">
                <button className="btn btn-accent btn-sm mt-3">Upload Death Certificate</button>
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
