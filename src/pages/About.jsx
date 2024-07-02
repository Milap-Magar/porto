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
            className="about-container gap-12 m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly md:pt-28 pt-96 rounded-xl"
          >
            <div className="flex md:flex-row flex-col w-[100vw]">
              <div className="w-[50vw] flex flex-col gap-10 md:gap-5">
                <h1 className="font-kod text-5xl sm:text-2xl md:text-7xl lg:text-8xl p-16 py-2 bg-red-200 my-3 transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                  MILAP
                </h1>
                <h1 className="font-kod text-5xl sm:text-2xl md:text-7xl lg:text-8xl p-16 py-2 bg-red-200 mb-3 transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                  Ramauli
                </h1>
                <h1 className="font-kod text-5xl sm:text-2xl md:text-7xl lg:text-8xl p-16 py-2 bg-red-200 transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                  Magar
                </h1>
              </div>
              <div className="w-[50vw] flex flex-col">
                <div className="">
                  <p className="font-kod flex flex-col gap-5 items-center text-lg w-[500px] h-[200px] bg-slate-200 px-2 py-6 text-center">
                    Hey, This is Milap. I'm currently studing computer
                    applications in Nepal. I live in Ekantakuna, Lalitpur.
                    <Resume />
                  </p>
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
