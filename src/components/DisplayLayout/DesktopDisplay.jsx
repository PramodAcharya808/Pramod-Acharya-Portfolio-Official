import React from "react";
import { IoIosArrowUp } from "react-icons/io";

function DesktopDisplay({ children }) {
  const scrollUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="space-y- mx-auto max-w-[1400px] select-none space-y-7">
      {children}
      <button
        className="topScroll fixed left-[90%] top-[90%] block transition-all active:scale-75 md:hidden"
        onClick={scrollUpHandler}
      >
        <IoIosArrowUp className="inline-block rounded-full bg-white text-3xl" />
      </button>
    </div>
  );
}

export default DesktopDisplay;
