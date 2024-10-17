import React, { useState } from "react";
import "../components/css/components.css";
import { motion } from "framer-motion";

import img1 from "../assets/ss.png";
import img2 from "../assets/ss1.png";
import img3 from "../assets/cms.png";
import img4 from "../assets/cal1.png";
import personalPorfolio from "../assets/personalPorfolio.png";
import { Line, Card } from "../components/jsx";

const Works = () => {
  const [startIndex, setStartIndex] = useState(0);

  const projects = [
    {
      heading: "Complaint Management System:",
      desc: "This project uses React and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MySQL for the database.",
      image: img3,
      link: "https://student-cms.netlify.app/",
    },
    {
      heading: "Figma Design Portfolio:",
      desc: "This is my personal portfolio design. Which includes various protypings and animations.",
      image: personalPorfolio,
      link: "https://www.figma.com/design/HMbqE6toslKWOuLqlL0omz/Milap-Magar---Portfolio?node-id=0-1&t=TtE6vqPkXMVIcVzU-1",
    },
    {
      heading: "Shoes Show-Case Website:",
      desc: "The React and Tailwind CSS-powered shoe web app presents a curated collection of footwear with images, names, and brief descriptions.",
      image: img1,
      link: "https://nikestore12.netlify.app/",
    },
    {
      heading: "Travel & Tour Website:",
      desc: "Wanderlust is a travel app crafted with Tailwind CSS and React, providing a seamless travel experience.",
      image: img2,
      link: "https://tours-travel12.netlify.app/",
    },
    {
      heading: "My first basic calculator",
      desc: "This project uses React and Tailwind CSS.",
      image: img4,
      link: "https://calculator2025.netlify.app/",
    },
  ];

  const cardsToShow = 3;
  const nextSet = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsToShow < projects.length ? prevIndex + cardsToShow : 0
    );
  };

  const prevSet = () => {
    setStartIndex((prevIndex) =>
      prevIndex - cardsToShow >= 0
        ? prevIndex - cardsToShow
        : projects.length - cardsToShow
    );
  };

  return (
    <div id="works">
      <div className="w-full h-auto relative">
        <Line heading="Projects" />
        <span className="absolute w-auto top-16 flex justify-center items-center text-start px-6">
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
                />
              </motion.div>
            ))}
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={prevSet}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full h-12 w-12 md:flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSet}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full h-12 w-12 md:flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Works;
