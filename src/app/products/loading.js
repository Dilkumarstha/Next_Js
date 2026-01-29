import React from "react";

const CardLoader = () => {
  return (
    <div className="border border-gray-100 shadow-md py-3 px-4 rounded-md flex flex-col gap-4 justify-center animate-pulse duration-300 ease-in-out">
      <div className="flex flex-col justify-start gap-3">
        <h1 className=" w-full h-15 rounded-md bg-gray-700"></h1>
        <p className=" bg-gray-500 w-full h-13 rounded-md"></p>
      </div>
      <div className="flex gap-3">
        <span className="h-8 w-16 bg-green-500 rounded-md px-3 "></span>
        <span className="h-8 w-13  bg-blue-500 rounded-md px-3 text-white"></span>
      </div>
      <div className="mt-auto">
        <button className="h-9 w-28 bg-red-400 px-3 py-1 rounded-md"></button>
      </div>
    </div>
  );
};
const loading = () => {
  return (
    <div className="px-10">
      <div className="grid grid-cols-4 gap-7 px-4 py-5 container mx-auto">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </div>
    </div>
  );
};

export default loading;
