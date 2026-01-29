import React from "react";
import Loading from "./products/loading";

const page = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center ">
      <div className="max-w-4xl w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome To <span className="text-red-500">Shop</span>Nest
            </h1>

            <p className="mt-4 text-gray-600">
              A ecommerce where you can find your desired products.
            </p>

            <a href="/products">
              {" "}
              <button className="mt-6 bg-red-400 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-red-600 transition">
                Get Started
              </button>
            </a>
          </div>

          {/* Visual Box */}
          <div className="h-[280px] bg-red-50 rounded-2xl flex items-center justify-center">
            <p className="text-red-500 font-semibold text-lg">
              <img src="shopnext.png"></img>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
