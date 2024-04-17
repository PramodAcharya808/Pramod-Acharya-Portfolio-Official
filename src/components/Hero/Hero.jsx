import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="heroWrapper flex  h-[40rem]  select-none flex-col items-center justify-center space-y-10  text-center text-white md:h-[50rem]">
      <div className="content space-y-5">
        <h1 className="name text-3xl md:text-6xl">
          Hi ! I am Pramod{" "}
          <span className="surName primary-color font-bold">Acharya</span>
        </h1>
        <h2 className="role text-2xl font-bold text-gray-400 md:text-3xl">
          Full Stack Developer
        </h2>
      </div>
      <div className="socialLinks flex space-x-9">
        <a
          href="https://www.linkedin.com/in/pramodacharya/"
          target="blank"
          className=" text-purple-600  transition-all active:scale-75 active:text-gray-200"
        >
          <FaLinkedin className="linkedin text-3xl md:text-5xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/pramodacharya/"
          className="active:primary-color text-purple-600 transition-all active:scale-75 active:text-gray-200"
        >
          <FaGithub className="linkedin text-3xl md:text-5xl" />
        </a>
        <a
          href="#"
          className="active:primary-color text-purple-600 transition-all active:scale-75 active:text-gray-200"
        >
          <AiFillInstagram className="linkedin text-3xl md:text-5xl" />
        </a>
      </div>
      <h3 className="services primary-color flex text-xl">
        I do
        <span className="ms-1 text-white">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "Web Designing",
                "Front-End Development",
                "Back-End Development",
                "Full Stack Development",
                "Consulting",
                "Freelancing",
              ],
            }}
          />
        </span>
      </h3>
      {/* <button className="cvDownload bg-primary-color rounded-2xl px-6 py-3 transition-all duration-300  hover:scale-110 active:scale-95">
        Download CV
      </button> */}

      <div className="downloadbtn">
        <button className="download-button">
          <div className="docs">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              height="20"
              width="20"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line y2="13" x2="8" y1="13" x1="16"></line>
              <line y2="17" x2="8" y1="17" x1="16"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>{" "}
            Download CV
          </div>
          <a className="download" href="https://www.google.com" target="blank">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line y2="3" x2="12" y1="15" x1="12"></line>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
