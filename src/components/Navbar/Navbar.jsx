import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // setting menu butn state
  const [isOpen, setIsOpen] = useState(false);

  // used to handle the menu click
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar  stic mx-auto box-border flex h-20  select-none items-center justify-between rounded-b-xl bg-[#1d1f23] pe-5 ps-5 text-white">
      {/* Desktop nav bar */}
      <h1 className="logo primary-color cursor-pointer select-none text-3xl font-bold transition-all active:scale-110 md:hover:scale-110">
        Pramod
      </h1>
      <div className="deskNav  hidden h-12 items-center justify-between  md:flex">
        <ul className="navList flex">
          <li className="cursor-pointer p-5 transition-all hover:animate-ping hover:font-bold">
            Home
          </li>
          <li className="cursor-pointer p-5 transition-all hover:animate-ping hover:font-bold">
            About Me
          </li>
          <li className="cursor-pointer p-5 transition-all hover:animate-ping hover:font-bold">
            Portfolio
          </li>
          <li className="cursor-pointer p-5 transition-all hover:animate-ping hover:font-bold">
            Projects
          </li>
        </ul>
      </div>

      {/* mobile nav bar */}
      <div
        className="mobileNav block active:animate-spin md:hidden"
        onClick={handleMenu}
      >
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          isOpen
            ? "text fixed left-0 top-0  z-[5] flex h-full w-[60%] select-none flex-col space-y-5 bg-[#1E2020] text-gray-400 transition-all duration-700"
            : "fixed -left-[1000px] top-0 z-[5] h-full w-[60%] space-y-5 transition-all duration-1000"
        }
      >
        <h1 className="logo primary-color mt-2 cursor-pointer select-none text-center text-3xl font-bold">
          Pramod
        </h1>
        <ul className="navList space-y-10 p-5 text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Me</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
