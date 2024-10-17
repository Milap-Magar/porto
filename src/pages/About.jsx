import React from "react";
import { Line } from "../components/jsx";
import Resume from "../components/jsx/Resume";
import { motion } from "framer-motion"; 

const About = () => {
  return (
    <>
      <div id="about">
        <div className="about-section w-full h-auto bg-inherit pt-10">
          <Line heading="About" />
          <motion.article
            id="article"
            className="about-container flex justify-center h-auto md:h-screen mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col md:flex-row w-full gap-16 md:gap-48 justify-center items-center">
              <motion.div
                className="w-[20vw] flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="font-kod flex flex-col gap-5 items-center text-base w-[300px] h-[200px] md:text-lg md:w-[500px] md:h-[200px] bg-indigo-300 px-2 py-6 text-center mb-16">
                  <p>
                    Hey, This is Milap. I'm currently studying computer
                    applications in Nepal. I live in Ekantakuna, Lalitpur.
                  </p>
                  <Resume />
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
