import React, { useState } from "react";
import { motion } from "framer-motion";
import HomeIcon from "../../../assets/Home.svg";
import ContactIcon from "../../../assets/Contact.svg";
import ProjectIcon from "../../../assets/Project.svg";
import oval from "../../../assets/navoval.svg";

const BNavbar = () => {
  const [activePage, setActivePage] = useState("home");

  const ovalPosition = {
    home: "translate-x-[-120%]", // Adjust these values as needed for precise placement
    project: "translate-x-[0%]",
    contact: "translate-x-[120%]",
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
  };

  const pageTransition = {
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 0.8 },
  };

  return (
    <div>
      {/* Page Content */}
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
        className="page-content"
      >
        {activePage === "home" && <div>Home Page</div>}
        {activePage === "project" && <div>Project Page</div>}
        {activePage === "contact" && <div>Contact Page</div>}
      </motion.div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 w-full bg-black h-[72px] flex items-center justify-around z-50">
        <div className="relative flex w-full h-full justify-around items-center">
          {/* Home Icon */}
          <motion.div
            className="h-8 w-8 relative"
            onClick={() => setActivePage("home")}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <img src={HomeIcon} alt="Home" className="h-9 w-9" />
          </motion.div>

          {/* Project Icon */}
          <motion.div
            className="h-8 w-8 relative"
            onClick={() => setActivePage("project")}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <img src={ProjectIcon} alt="Project" className="h-9 w-9" />
          </motion.div>

          {/* Contact Icon */}
          <motion.div
            className="h-8 w-8 relative"
            onClick={() => setActivePage("contact")}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <img src={ContactIcon} alt="Contact" className="h-9 w-9" />
          </motion.div>

          {/* Oval Moving */}
          <motion.div
            className={`absolute bottom-[0px] w-[102px] h-[72px] bg-transparent`}
            initial={false}
            animate={{
              x:
                activePage === "home"
                  ? "-120%" 
                  : activePage === "project"
                  ? "0%" // Move the oval to the center (project icon)
                  : "120%", // Move the oval to surround the contact icon
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <motion.img
              src={oval}
              alt="Oval"
              className="w-[72px] h-[72px] absolute"
              style={{
                top: "-18px", // Adjust this as needed for correct vertical alignment
              }}
            />
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default BNavbar;
