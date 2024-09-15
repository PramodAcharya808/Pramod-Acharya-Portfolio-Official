import React from "react";
import aboutDp from "../../assets/about-dp.jpg";

function About() {
  return (
    <section
      className="aboutSection bg-[#101010] text-center md:py-20"
      id="aboutMe"
    >
      <div className="aboutWrapper max-h[1200px] mx-auto box-border flex max-w-[1200px] flex-col items-center  justify-center space-y-11  bg-aboutBg p-10 md:flex-row md:space-x-11 md:space-y-0 md:rounded-3xl">
        <img src={aboutDp} className="h-60 w-60 rounded-full" />
        <h3 className="text-justify font-bold text-gray-400 ">
          <p className="mb-5 text-center text-xl font-bold uppercase text-white md:text-left">
            About <span className="primary-color">Me !</span>
          </p>
          Passionate Full Stack Web Developer with expertise in frontend and
          backend technologies. Proficient in HTML, CSS, JavaScript, React.js,
          Node.js, and Python, dedicated to crafting dynamic web solutions.
          Eager learner, always staying ahead of industry trends. Committed to
          delivering visually stunning and intuitive web applications for
          unparalleled user experiences. Seeking entry-level opportunities to
          apply technical prowess and thrive in a collaborative environment.
          Ready to embark on an exciting journey in web development.
        </h3>
      </div>
    </section>
  );
}

export default About;
