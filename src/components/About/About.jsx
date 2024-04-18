import React from "react";
import aboutDp from "../../assets/about-dp.jpg";

function About() {
  return (
    <section className="aboutSection h-dvh bg-[#070219] py-20  text-center">
      <h1 className=" mb-5 font-bold uppercase text-white">
        About <span className="primary-color">Me !</span>
      </h1>
      <div className="aboutWrapper max-h[1200px] bg-aboutBg mx-auto box-border flex max-w-[1200px] flex-col  items-center justify-center  space-y-11 p-10 md:flex-row md:space-x-11 md:space-y-0 md:rounded-3xl">
        <img src={aboutDp} className="h-60 w-60 rounded-full" />
        <p className="text-justify font-bold text-gray-400 ">
          Passionate Full Stack Web Developer with expertise in frontend and
          backend technologies. Proficient in HTML, CSS, JavaScript, React.js,
          Node.js, and Python, dedicated to crafting dynamic web solutions.
          Eager learner, always staying ahead of industry trends. Committed to
          delivering visually stunning and intuitive web applications for
          unparalleled user experiences. Seeking entry-level opportunities to
          apply technical prowess and thrive in a collaborative environment.
          Ready to embark on an exciting journey in web development.
        </p>
      </div>
    </section>
  );
}

export default About;
