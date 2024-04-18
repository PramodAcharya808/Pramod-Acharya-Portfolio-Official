import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="scrollBtn z-999 fixed left-[90%] top-[90%] flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:scale-125 active:scale-75"
      onClick={scrollTopHandler}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;
