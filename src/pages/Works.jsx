import React, { useState } from "react";
import "../components/css/components.css";
import img1 from "../assets/ss.png";
import img2 from "../assets/ss1.png";
import img3 from "../assets/cms.png";
import img4 from "../assets/cal.png";
import { Line, Card } from "../components/jsx";

const Works = () => {
  const [startIndex, setStartIndex] = useState(0);

  const projects = [
    {
      heading: "Complaint Management System:",
      desc: "This project uses React and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MySQL for the database.",
      image: img3,
    },
    {
      heading: "Shoes Show-Case Website:",
      desc: "The React and Tailwind CSS-powered shoe web app presents a curated collection of footwear with images, names, and brief descriptions.",
      image: img1,
    },
    {
      heading: "Travel & Tour Website:",
      desc: "Wanderlust is a travel app crafted with Tailwind CSS and React, providing a seamless travel experience.",
      image: img2,
    },
    {
      heading: "Complaint Management System:",
      desc: "This project uses React and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MySQL for the database.",
      image: img3,
    },
    {
      heading: "Complaint Management System:",
      desc: "This project uses React and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MySQL for the database.",
      image: img4,
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
    <div id="works" className="w-full h-[1300px] md:h-screen relative">
      <Line heading="Projects" />
      <div className="works-container gap-12 m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly md:pt-28 pt-96 rounded-xl">
        {projects
          .slice(startIndex, startIndex + cardsToShow)
          .map((project, index) => (
            <div
              key={index}
              className="transition-all duration-500 transform hover:scale-105"
            >
              <Card
                heading={project.heading}
                desc={project.desc}
                image={project.image}
              />
            </div>
          ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevSet}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
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
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
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
  );
};

export default Works;
