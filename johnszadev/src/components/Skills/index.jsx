import React from "react";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Javascript from "../../assets/javascript.png";
import ReactImage from "../../assets/react.png";
import GitImg from "../../assets/Git.png";
import TailWind from "../../assets/Tailwind_CSS_Logo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-r from-black to-gray-800 text-gray-300 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-gray-400">
            Habilidades
          </p>
          <p className="py-4 text-center">Aqui estão os meus conhecimentos</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 ">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Javascript} alt="JS icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={ReactImage}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={GitImg} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={TailWind}
              alt="TailWind icon"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
