import React from "react";
import { Line } from "../components/jsx";
import Resume from "../components/jsx/Resume";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="about-section w-full h-screen bg-inherit">
          <Line heading="About" />
          <article
            id="article"
            className="about-container flex justify-center h-[990px] md:h-full"
          >
            <div className="flex flex-col md:flex-row w-full gap-16 md:gap-48 justify-center items-center">
              <div className="hidden md:flex md:flex-col gap-3 md:gap-5">
                <h1 className="font-kod text-xl sm:text-2xl md:text-6xl lg:text-6xl p-16 py-2 bg-red-200 mb-3 transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                  MILAP
                </h1>
                <h1 className="font-kod text-xl sm:text-2xl md:text-6xl lg:text-6xl p-16 py-2 bg-red-200 mb-3 transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                  Ramauli
                </h1>
                <h1 className="font-kod text-xl sm:text-2xl md:text-6xl lg:text-6xl p-16 py-2 bg-red-200 transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                  Magar
                </h1>
              </div>
              <div className="w-[20vw] flex flex-col justify-center items-center">
                <div className="font-kod flex flex-col gap-5 items-center text-base w-[300px] h-[200px] md:text-lg md:w-[500px] md:h-[200px] bg-indigo-300 px-2 py-6 text-center">
                  <p>
                    Hey, This is Milap. I'm currently studing computer
                    applications in Nepal. I live in Ekantakuna, Lalitpur.
                  </p>
                  <Resume />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default About;
