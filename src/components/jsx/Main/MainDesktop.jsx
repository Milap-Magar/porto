import React from "react";
import main_image from "../../../assets/main1.jpg";
import dog from "../../../assets/maineyes.gif";
import { motion } from "framer-motion";
import "../../css/components.css";

const MainDesktop = () => {
  return (
    <>
      <div
      id="main"
        className="main-section relative h-screen w-full overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${main_image})` }}
      >
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <motion.figure
          className="absolute right-10 top-36 z-10 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="h-[300px] w-[400px] object-contain opacity-80 "
            src={dog}
            alt="doggo"
          />
        </motion.figure>
        <motion.article
          className="main-heading w-[48vw] absolute top-48 left-5 px-5 z-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="font-cross text-[32px]">
            Hiee, I’m Milap Magar, a frontend developer
          </h1>
          <span className="font-kod">
            I am fascinated with web designs and keen eyes towards 3D models and
            modern projects.
          </span>
        </motion.article>
      </div>
    </>
  );
};

export default MainDesktop;
