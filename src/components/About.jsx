import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#263140] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-ful grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-ful grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Davron, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              nobis iusto consequuntur facilis enim reprehenderit voluptates cum
              obcaecati necessitatibus, aut unde amet dolorem itaque aliquam
              quasi. Reprehenderit distinctio deserunt similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
