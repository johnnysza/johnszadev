import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-black to-gray-800"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-400 italic">Olá, meu nome é</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jonathan Souza
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Sou um desenvolvedor front end.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
      </div>
    </div>
  );
};

export default Home;
