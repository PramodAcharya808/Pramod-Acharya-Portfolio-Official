import React from "react";
import ImageData from "./ImageData";

function SkillCard() {
  return (
    <div className="group flex h-[110px] items-center space-x-16 overflow-hidden">
      <div className="animate-loop-scroll group-hover:paused flex space-x-16">
        {ImageData.map((data) => {
          return (
            <img
              src={data.img}
              key={data.id}
              className=" max-h-20 max-w-20 rounded-lg bg-white p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            />
          );
        })}
      </div>
      <div
        className="animate-loop-scroll group-hover:paused flex space-x-16"
        aria-hidden="true"
      >
        {ImageData.map((data) => {
          return (
            <img
              src={data.img}
              key={data.id}
              className="max-h-20 max-w-20 rounded-lg border bg-white p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            />
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
