import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="projectSection space-y-10 bg-[#1C1F24] py-10 font-bold text-white">
      <h1 className="headding text-center text-xl uppercase">
        My <span className="primary-color">Projects</span>
      </h1>
      <ProjectCard />
    </section>
  );
};

export default Project;
