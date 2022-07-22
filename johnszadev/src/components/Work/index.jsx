import React from "react";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-gradient-to-r from-black to-gray-800"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400 ">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm: grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#626364] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="text-4xl flex justify-center">Weather App</span>
              <div className="pt-8 flex ">
                <a href="https://instant-weather-taupe.vercel.app">
                  <button className="text-white border-2 hover:bg-gray-700 px-4 py-2 my-3 mx-1 flex items-center">
                    Project
                  </button>
                </a>
                <a href="https://github.com/johnnysza/instant-weather">
                  <button className="text-white border-2 hover:bg-gray-700 px-4 py-2 my-3 mx-1 flex items-center">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
