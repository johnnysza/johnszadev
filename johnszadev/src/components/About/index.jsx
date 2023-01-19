import React from "react";
import DevPhoto from "../../assets/Photo2.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-black to-gray-800 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w=[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">
              Sobre
            </p>
          </div>
        </div>
        <div className="w-60 pb-4">
          <img className="rounded-full " src={DevPhoto} alt="" />
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Olá, sou Jonathan, é um prazer conhecê-lo(a). Por favor, fique a
              vontade!
            </p>
          </div>
          <div className="text-2xl font-bold">
            <p>
              Sou um desenvolvedor de São Paulo - Brasil e tenho uma paixão em
              construir sites que despertem alegria, satisfação e
              principalmente, inspiração para todos aqueles que tenham interesse
              nessa grande área que é a programação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
