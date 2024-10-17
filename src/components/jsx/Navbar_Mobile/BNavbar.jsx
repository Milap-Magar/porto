import React, { useState } from "react";
import { motion, transform } from "framer-motion";
import HomeIcon from "../../../assets/Home.svg";
import ContactIcon from "../../../assets/contact1.svg";
import ProjectIcon from "../../../assets/project1.svg";
import oval from "../../../assets/transparentCircle.svg";
import Main from "../Main/Main";
import Contact from "../../../pages/Contact";
import Works from "../../../pages/Works";

const BNavbar = () => {
  const [activePage, setActivePage] = useState("home");

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
    <div className="">
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
        className="page-content"
      >
        {activePage === "home" && <div>NO-Page</div>}
        {activePage === "project" && (
          <div>
            <Works />
          </div>
        )}
        {activePage === "contact" && (
          <div>
            <Contact />
          </div>
        )}
      </motion.div>

      <nav className="fixed bottom-0 w-full bg-black h-[72px] flex items-center justify-around z-50 ">
        <div className="relative flex w-full h-full justify-center gap-[5rem] items-center">
          <motion.div
            className={`absolute bottom-0 w-[98px] h-[72px]`}
            initial={false}
            animate={{
              x:
                activePage === "home"
                  ? "-109%"
                  : activePage === "project"
                  ? "0%"
                  : "109%",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            style={{ zIndex: 1 }}
          >
            <div
              className="absolute -top-1 w-[92px] h-[50px] bg-white rounded-bl-[920px] rounded-br-[900px] "
              style={{
                // filter: "blur(10px)",
                zIndex: -10,
              }}
            />

            <motion.img
              src={oval}
              alt="Oval"
              className="w-[105px] h-[98px] absolute "
              style={{
                top: "-46px",
                backgroundColor: "transparent",
              }}
            />
          </motion.div>

          {/* Home Icon */}
          <motion.div
            className={`w-8 relative ${
              activePage === "home" ? "z-10" : "animate z-0"
            }`}
            onClick={() => setActivePage("home")}
            initial={{ height: "20px" }}
            animate={{ height: activePage === "home" ? "120%" : "45%" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.5,
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src={HomeIcon} alt="Home" className="h-8 w-14" />
          </motion.div>

          {/* Project Icon */}
          <motion.div
            className={`w-[1.65rem] relative ${
              activePage === "project" ? "z-10 " : "animate z-0"
            }`}
            onClick={() => setActivePage("project")}
            initial={{ height: "20px" }}
            animate={{ height: activePage === "project" ? "89px" : "32px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.5,
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src={ProjectIcon} alt="Project" className="h-9 w-9" />
          </motion.div>

          {/* Contact Icon */}
          <motion.div
            className={`w-7 relative ${
              activePage === "contact" ? "z-10 " : " animate z-0"
            }`}
            onClick={() => setActivePage("contact")}
            initial={{ height: "20px" }}
            variants={buttonVariants}
            animate={{ height: activePage === "contact" ? "86px" : "32px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.5,
            }}
            whileHover="hover"
            whileTap="tap"
          >
            <img src={ContactIcon} alt="Contact" className="h-9 w-9" />
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default BNavbar;
