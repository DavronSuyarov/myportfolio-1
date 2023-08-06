import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#263140]">
      {/* Contauner */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Davron Suyarov
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          With 6 years of successfully developing interactive web applications,
          leveraging cutting-edge technologies and mentoring junior developers,
          I have significantly improved organizational scalability, user
          experience and UI/UX design, culminating in a 50% increase in user
          satisfaction, 80% increase in product efficiency, and a 25%
          improvement of client-side scripts. Skilled in React, HTML, JS, AJAX,
          and CSS, I am confident in my ability to bring valuable expertise and
          innovative solutions to any position.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
