import React from "react";
import main_image from "../../../assets/dog.jpg";
import { motion } from "framer-motion";
import "../../css/components.css";

const MainDesktop = () => {
  return (
    <>
      <div
        id="main"
        className="main-section relative h-screen w-full overflow-hidden"
      >
        <motion.figure
          className="absolute right-0 top-36"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="h-[350px] w-[400px] object-contain"
            src={main_image}
            alt="main_image"
          />
        </motion.figure>
        <motion.article
          className="main-heading w-[48vw] absolute top-48 left-5 px-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="font-cross text-[32px]">
            Hiee, I’m Milap Magar, a frontend developer 
          </h1>
          <span className="font-kod">I am fasinated with web designs and keen eyes towards 3d models and mordern proejects</span>
        </motion.article>
      </div>
    </>
  );
};

export default MainDesktop;
