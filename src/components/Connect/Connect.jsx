import React from "react";
import "./Connect.css";
import { MdEmail } from "react-icons/md";

const Connect = () => {
  return (
    <section
      className="connectSection mb-16 py-20 md:mb-0  md:py-0"
      id="connect"
    >
      <div className="formWrapper mx-auto h-[450px] max-w-[1200px] items-center justify-center space-y-5 md:flex md:space-x-10 md:space-y-0 ">
        <div className="myInfo flex h-[50%] flex-col items-center justify-center space-y-7 rounded-3xl bg-[#1C1F24] md:h-[60%] md:w-[40%]">
          <p className="text-3xl font-bold text-white ">
            Contact <span className="primary-color">Me</span>
          </p>
          <p className="font-light text-white">
            Lets connect on email or LinkedIn
          </p>
          <div className="text-md flex items-center space-x-5 text-white">
            <MdEmail size={25} />
            <p>pramodacharya@gmail.com</p>
          </div>
        </div>

        <div className="form flex flex-col  text-center">
          <form
            action="https://getform.io/f/pbmqyqyb"
            method="POST"
            className="space-y-5"
          >
            <div className="username ">
              <input
                type="text"
                autoComplete="off"
                required="required"
                name="text"
                className="input  md:w-[100%]"
                placeholder="Username"
              />
            </div>
            <div className="emailAddress">
              <input
                type="email"
                autoComplete="off"
                name="email"
                required="required"
                className="input  md:w-[100%]"
                placeholder="Email Address"
              />
            </div>

            <div className="message">
              <textarea
                type="text"
                autoComplete="off"
                name="message"
                className="input  md:w-[100%]"
                placeholder="Message"
              />
            </div>

            <button className="submitBtn bg-primary-color mx-10 md:mx-0 md:w-[100%]">
              Submit
              <svg
                fill="white"
                viewBox="0 0 448 512"
                height="1em"
                className="arrow"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
