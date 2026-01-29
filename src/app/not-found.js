import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <p>
          <span className="font-semibold "> <span className="text-red-600 text-xl"  >Page</span> Not Found  </span> |Return
          to the Home Page
        </p>
        <a href="/">
          <button className="bg-red-400 px-4 py-3 rounded-md text-white hover:bg-red-600 transition-all duration-300 cursor-pointer">Click Me</button>
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
