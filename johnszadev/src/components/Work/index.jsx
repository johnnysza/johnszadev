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
            Projetos
          </p>
          <p className="py-6">Veja aqui alguns projetos que criei</p>
        </div>

        <div className="grid sm: grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#626364] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="text-4xl flex justify-center text-center">
                Instant Weather
              </span>
              <span className="text-sm  pt-4 flex justify-center text-center">
                Uma aplicação de previsão de tempo, feita em React, utilizando a
                OpenWeatherAPI, ContextAPI e estilizado com TailWind CSS.
              </span>
              <div className="pt-4 flex justify-center text-center ">
                <a
                  href="https://instant-weather-taupe.vercel.app"
                  target="blank"
                >
                  <button className="text-white border-2 hover:bg-gray-700 px-4 py-2 my-3 mx-1 flex items-center">
                    Projeto
                  </button>
                </a>
                <a
                  href="https://github.com/johnnysza/instant-weather"
                  target="blank"
                >
                  <button className="text-white border-2 hover:bg-gray-700 px-4 py-2 my-3 mx-1 flex items-center">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#626364] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="text-4xl flex justify-center text-center">
                Kenzie Shop
              </span>
              <span className="text-sm pt-4 flex justify-center text-center">
                Um site de e-commerce, feito em React, ContextAPI e estilizado
                com Styled Components.
              </span>
              <div className="pt-4 flex justify-center text-center ">
                <a
                  href="https://react-entrega-s3-kenzishop-com-context-api-johnnysza.vercel.app"
                  target="blank"
                >
                  <button className="text-white border-2 hover:bg-gray-700 px-4 py-2 my-3 mx-1 flex items-center">
                    Project
                  </button>
                </a>
                <a
                  href="https://github.com/johnnysza/Kenzie-Shop"
                  target="blank"
                >
                  <button className="text-white border-2 hover:bg-gray-700 px-4 py-2 my-3 mx-1 flex items-center">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#626364] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="text-4xl flex justify-center text-center">
                Kenzie Burguer
              </span>
              <span className="text-sm  pt-6 flex justify-center text-center">
                Um e-commerce de fast-food, feito em ReactJS.
              </span>
              <div className="pt-8 flex justify-center text-center ">
                <a href="https://burguer-kenzie-tau.vercel.app" target="blank">
                  <button className="text-white border-2 hover:bg-gray-700 px-4 py-2 my-3 mx-1 flex items-center">
                    Project
                  </button>
                </a>
                <a
                  href="https://github.com/johnnysza/Burguer-Kenzie"
                  target="blank"
                >
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
