import React from "react";
import { BNavbar } from "../components/jsx/index";
import image from "../../public/logo1.svg";
import "../components/css/components.css";

const Landing = () => {
  return (
    <>
      <div className="relative">
        <div className="navbar-section relative w-full h-10 p-16 flex items-center justify-center ">
          <figure className="logo">
            <a href="/">
              <img
                src={image}
                alt="Logo image"
                className="h-24 w-24 transition-transform duration-300 hover:scale-105"
              />
            </a>
          </figure>
        </div>
        <BNavbar />
      </div>
    </>
  );
};

export default Landing;
