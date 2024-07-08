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
    <>
      <a
        href="https://topmate.io/pramod_acharya?utm_source=linkedin&utm_medium=product&utm_campaign=ss"
        target="blank"
      >
        <button className="scrollBtn fixed left-[80%] top-[90%] z-[999] flex h-8 w-32 items-center justify-center rounded-full border border-black bg-white font-bold text-black transition-all hover:scale-110 active:scale-100">
          Connect 1 : 1
        </button>
      </a>
      <button
        className="scrollBtn fixed left-[90%] top-[90%] z-[999] flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:scale-125 active:scale-75"
        onClick={scrollTopHandler}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default ScrollTop;
