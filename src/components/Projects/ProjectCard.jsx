import React from "react";
import { projectData } from "./projectData";

export default function ProjectCard() {
  return (
    <div className="cardSection mx-auto max-w-[1200px] space-y-10">
      {projectData.map((projects) => {
        return (
          <div
            className="cards bg-aboutBgRight a flex min-h-[350px] flex-col items-center space-x-5 rounded-3xl p-10 md:flex-row"
            key={projects.id}
          >
            <img src={projects.mockup} className="md:h-1/2 md:w-1/3" />

            <div className="content my-5 space-y-6 md:my-0 md:space-y-4">
              <p className="title text-2xl text-slate-100">{projects.title}</p>
              <p className="desc text-[#b2b2b2] ">{projects.description}</p>
              <div className="toolsUsed flex flex-wrap">
                {projects.tools.map((tools) => {
                  return (
                    <p
                      className="tools bg-primary-color my-2 me-5 rounded-md px-2 py-1 font-normal"
                      key={tools}
                    >
                      {tools}
                    </p>
                  );
                })}
              </div>

              <div className="buttons box-border h-20 space-x-10 ">
                <a href={projects.live} target="blank">
                  <button className="group relative overflow-hidden rounded-md border border-b-4 border-red-400 bg-red-950 px-4 py-2 font-medium text-slate-200 outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
                    <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-red-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-red-400 duration-500 group-hover:top-[150%]"></span>
                    <span className="animate-ping">◉</span> LIVE
                  </button>
                </a>

                <a href={projects.sourcecode} target="blank">
                  <button className="bg-greAen-950 group relative overflow-hidden rounded-md border border-b-4 border-green-400 px-4 py-2 font-medium text-slate-200 outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75 ">
                    <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-green-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-green-400 duration-500 group-hover:top-[150%]"></span>
                    Source Code
                  </button>
                  {projects.id === 1 ? (
                    <span className="my-5 block text-slate-400 md:mx-3 md:my-0 md:inline">
                      Full SRC is not accessible. NDA Signed
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
