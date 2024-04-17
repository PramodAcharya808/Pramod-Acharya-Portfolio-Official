import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import DownloadBtn from "./DownloadBtn";
import profilePic from "../../assets/profile-pic.png";

const Hero = () => {
  return (
    <main
      className="heroWrapper flex  h-[40rem]  select-none flex-col items-center justify-center space-y-10  text-center text-white md:h-[50rem]"
      id="heroSection"
    >
      <a
        className="profile w-60 cursor-help rounded-full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all active:scale-90 md:w-72"
        href="https://www.linkedin.com/in/pramodacharya/"
        target="blank"
      >
        <img src={profilePic} alt="loading" />
      </a>
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
          href="https://github.com/PramodAcharya808"
          target="blank"
          className="active:primary-color text-purple-600 transition-all active:scale-75 active:text-gray-200"
        >
          <FaGithub className="linkedin text-3xl md:text-5xl" />
        </a>
        <a
          href="https://www.instagram.com/pramod____acharya/"
          target="blank"
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
      <DownloadBtn />
    </main>
  );
};

export default Hero;
