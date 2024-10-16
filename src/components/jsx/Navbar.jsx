import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import image from "../../../public/logo1.svg";
import "../css/components.css";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="navbar-section relative w-full h-16 flex items-center justify-center ">
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
    </>
  );
};

export default Navbar;
