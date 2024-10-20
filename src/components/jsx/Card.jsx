import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import NewButton from "./NewButton";

const Card = (props) => {
  return (
    <motion.div
      className="w-full h-full bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-20 shadow-xl shadow-emerald-300 rounded-xl flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="w-full h-[180px] flex justify-center items-center">
        <img
          src={props.image}
          alt="project/images"
          className="object-cover w-full h-full rounded-t-xl"
        />
      </figure>
      <div className="my-2 md:my-4 mx-4 flex-grow">
        <h1 className="md:text-base font-extrabold lg:text-xl font-kod text-center">
          {props.heading}
        </h1>
        <p className="text-xs lg:text-sm font-kod text-center">{props.desc}</p>
        <div className="flex justify-center items-center mt-4">
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
            <NewButton value="View Project" />
          </a>
          <a
            href={props.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-2xl text-gray-700 hover:text-black"
          >
            <FaGithub className="h-7 w-7 cursor-pointer" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
