import React, { useState } from "react";
import "../components/css/components.css";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { Line, Card } from "../components/jsx";
import main_image from "../assets/project.jpg";

const Works = () => {
  const [startIndex, setStartIndex] = useState(0);

  const cardsToShow = 3;
  const totalSets = Math.ceil(projects.length / cardsToShow);

  const goToSet = (setIndex) => {
    setStartIndex(setIndex * cardsToShow);
  };

  return (
    <div
    id="works"
      className="main-section relative h-screen w-full overflow-hidden bg-cover my-2 py-4"
      style={{ backgroundImage: `url(${main_image})` }}
    >
      <div className="w-full h-screen relative">
        <Line heading="Projects" />
        <span className="absolute w-auto top-16 flex justify-center items-center text-start px-6 font-kod">
          Here are some of the projects.
        </span>
        <div className="works-container gap-12 mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly pt-32 rounded-xl">
          {projects
            .slice(startIndex, startIndex + cardsToShow)
            .map((project, index) => (
              <motion.div
                key={index}
                className="transition-all duration-500 transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  heading={project.heading}
                  desc={project.desc}
                  image={project.image}
                  link={project.link}
                  gitLink={project.gitLink}
                />
              </motion.div>
            ))}
        </div>
        {/* Dots for navigation */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
          {Array.from({ length: totalSets }).map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                startIndex / cardsToShow === index
                  ? "bg-gray-800"
                  : "bg-white"
              }`}
              onClick={() => goToSet(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
