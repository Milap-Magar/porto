import React from "react";
import { Line } from "../components/jsx";
import Resume from "../components/jsx/Resume";
import { motion } from "framer-motion";
import main_image from "../assets/about.jpg";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="main-section relative h-screen w-full overflow-hidden bg-cover my-2 py-4"
        style={{ backgroundImage: `url(${main_image})` }}
      >
        <div className="about-section w-full h-screen bg-inherit pt-10">
          <div className="text-white">
            <Line heading="About" />
          </div>

          <motion.article
            id="article"
            className="about-container flex justify-center h-auto md:h-screen mt-28 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col md:flex-row w-full justify-end items-center px-6 md:px-28">
              {/* Glowing Bullet Points Container */}
              <motion.div
                className="w-full md:w-[50vw] flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="font-kod flex flex-col gap-6 items-start w-full md:w-[500px] px-4 py-4 text-white">
                  {/* Glowing Bullet Point 1 */}
                  <div className="relative pl-8">
                    <span className="before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-300 before:rounded-full before:animate-pulse before:shadow-[0_0_10px_#4f46e5]">
                      Hey, This is Milap. I'm currently studying computer
                      applications in Nepal.
                    </span>
                  </div>

                  {/* Glowing Bullet Point 2 */}
                  <div className="relative pl-8">
                    <span className="before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-300 before:rounded-full before:animate-pulse before:shadow-[0_0_10px_#4f46e5]">
                      I love web development and working on creative projects.
                    </span>
                  </div>

                  {/* Glowing Bullet Point 3 */}
                  <div className="relative pl-8">
                    <span className="before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-300 before:rounded-full before:animate-pulse before:shadow-[0_0_10px_#4f46e5]">
                      I'm constantly learning languages like Java.
                    </span>
                  </div>

                  {/* Resume Component */}
                  <div className="mt-6 text-center">
                    <Resume />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default About;
