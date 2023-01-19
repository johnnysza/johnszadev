import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div
        name="contact"
        className="w-full h-screen bg-gradient-to-r from-black to-gray-800 flex justify-center items-center p-4 "
      >
        <form
          method="POST"
          action="https://getform.io/f/5a582eec-9c29-45de-9711-bfb552d9241d"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400 text-gray-300">
              Contato
            </p>
            <p className="text-gray-300 py-4">Entre em contato comigo!</p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-gray-700 px-4 py-3 my-8 mx-auto flex items-center">
            Contato!
          </button>
        </form>
        <div>
          <ul>
            <li className="mb-5 text-gray-300">
              <a
                className="md:hidden"
                href="https://www.linkedin.com/in/jonathansilvasza/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 md:hidden"
                href="https://github.com/johnnysza"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
