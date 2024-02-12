// import { useState } from "react";
import image from "../assets/Logo.svg";
import "./components.css";
// import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {

  return (
    <>
      <div className="navbar-section relative w-full h-28">
        <figure className="logo absolute top-4 left-6">
          <a href="/">
            <img
              src={image}
              alt="Logo image"
              className="h-16 w-16"
            />
          </a>
        </figure>
        <div className="navbar-items absolute top-7 right-10">
          <ul className="list-items flex justify-center items-center gap-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/works">Works</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#"><Button name="Contact Me" /></a>
            </li>
          </ul>
          <button className="btn-nav">
            {/* {Sidebar ? <FaTimes /> : <FaBars />} */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
