import React from "react";

const MySkills = () => {
  return (
    <section className="mySkills-section md:pb-5" id="mySkills">
      <div className="mySkillWrapper mx-auto mt-10 flex flex-col gap-5 bg-[#20242D] md:max-w-[1200px]">
        <p className="mb-5 text-center text-xl font-bold uppercase text-white ">
          technical <span className="primary-color">skills</span>
        </p>
        <div className="frontendSection bg-aboutBgRight p-5 md:rounded-3xl ">
          <div className="frontendWrapper">
            <p className="mb-5 text-xl font-bold text-white">
              Front <span className="primary-color">End</span>
            </p>
            <div className="skillHolder flex flex-wrap">
              <div className="m-2 max-w-32 rounded-md bg-[#DD4B25] px-3 py-1 text-center font-bold text-white">
                HTML
              </div>
              <div className="m-2 rounded-md bg-[#258FC9] px-3 py-1 text-center font-bold text-white">
                CSS
              </div>
              <div className="m-2 rounded-md bg-[#EFD81D] px-3 py-1 text-center font-bold text-black">
                JavaScript
              </div>
              <div className="m-2 rounded-md bg-[#760FF0] px-3 py-1 text-center font-bold text-white">
                BootStrap
              </div>
              <div className="m-2 rounded-md bg-[#15B8C5] px-3 py-1 text-center font-bold text-[#151C2C]">
                Tailwind CSS
              </div>
              <div className="m-2 rounded-md bg-[#007BF7] px-3 py-1 text-center font-bold text-white">
                Material UI
              </div>
              <div className="m-2 rounded-md bg-[#00D2F7] px-3 py-1 text-center font-bold text-black">
                React JS
              </div>
              <div className="m-2 rounded-md bg-[#7D42BF] px-3 py-1 text-center font-bold text-white">
                Redux
              </div>
            </div>
          </div>
        </div>

        <div className="backendSection bg-aboutBgRight p-5 md:rounded-3xl">
          <div className="frontendWrapper">
            <p className="mb-5 text-xl font-bold text-white">
              Back <span className="primary-color">End</span>
            </p>
            <div className="skillHolder flex flex-wrap">
              <div className="m-2 max-w-32 rounded-md bg-[#212121] px-3 py-1 text-center font-bold text-white">
                Express JS
              </div>{" "}
              <div className="m-2 max-w-32 rounded-md bg-[#87BF00] px-3 py-1 text-center font-bold text-[#313131]">
                Node JS
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#F6D473] px-3 py-1 text-center font-bold text-[#313131]">
                JSON
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#E84D31] px-3 py-1 text-center font-bold text-white">
                Git
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#3192E1] px-3 py-1 text-center font-bold text-white">
                RESTful APIs
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#000000] px-3 py-1 text-center font-bold text-white">
                JWT
              </div>
            </div>
          </div>
        </div>

        <div className="databaseSection bg-aboutBgRight p-5 md:rounded-3xl">
          <div className="frontendWrapper">
            <p className="mb-5 text-xl font-bold text-white">
              Data <span className="primary-color">Base</span>
            </p>
            <div className="skillHolder flex flex-wrap">
              <div className="m-2 max-w-32 rounded-md bg-[#4DA53F] px-3 py-1 text-center font-bold text-white">
                MongoDB
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#840000] px-3 py-1 text-center font-bold text-white">
                Mongoose
              </div>
            </div>
          </div>
        </div>

        <div className="deploymentSection bg-aboutBgRight p-5 md:rounded-3xl">
          <div className="frontendWrapper">
            <p className="mb-5 text-xl font-bold text-white">
              Deploy<span className="primary-color">ment</span>
            </p>
            <div className="skillHolder flex flex-wrap">
              <div className="m-2 max-w-32 rounded-md bg-[#301D5A] px-3 py-1 text-center font-bold text-white">
                GitHub
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#F79500] px-3 py-1 text-center font-bold text-[#1F2C3A]">
                AWS
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#006FC0] px-3 py-1 text-center font-bold text-white">
                Azure
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#0997E5] px-3 py-1 text-center font-bold text-white">
                Docker
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#44DCB1] px-3 py-1 text-center font-bold text-gray-900">
                Render
              </div>
              <div className="m-2 max-w-32 rounded-md bg-[#000000] px-3 py-1 text-center font-bold text-white">
                Vercel
              </div>
            </div>
          </div>
        </div>

        <div className="toolsSection bg-aboutBgRight p-5 md:rounded-3xl">
          <div className="frontendWrapper">
            <p className="mb-5 text-xl font-bold text-white">
              Tool<span className="primary-color">s</span>
            </p>
            <div className="skillHolder flex flex-wrap">
              <div className="m-2 max-w-32 rounded-md bg-[#F76936] px-3 py-1 text-center font-bold text-white">
                Postman
              </div>{" "}
              <div className="m-2 max-w-32 rounded-md bg-[#0074B3] px-3 py-1 text-center font-bold text-white">
                VS Code
              </div>{" "}
              <div className="max-w-38 m-2 rounded-md bg-[#5DA342] px-3 py-1 text-center font-bold text-white">
                MongoDB Compass
              </div>{" "}
              <div className="max-w-38 m-2 rounded-md bg-[#F7F7F7] px-3 py-1 text-center font-bold text-[#2F336B]">
                API Dog
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
