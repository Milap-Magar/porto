import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import image from "../../assets/Logo.svg";
import "../css/components.css";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar-section relative w-full h-28 flex items-center justify-between px-6 md:px-20">
        <figure className="logo">
          <a href="/">
            <img
              src={image}
              alt="Logo image"
              className="h-16 w-16 transition-transform duration-300 hover:scale-105"
            />
          </a>
        </figure>
        <div className="hidden md:flex navbar-items">
          <ul className="list-items flex justify-center items-center gap-8">
            <li>
              <a
                href="/"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a href="#contact">
                <Button name="Contact Me" />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            {menuOpen ? (
              <FaTimes className="h-8 w-8 text-gray-800" />
            ) : (
              <FaBars className="h-8 w-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`h-[40vh] md:hidden flex flex-col justify-center items-center bg-slate-200 py-4 absolute w-full top-28 shadow-lg z-10 animate-slideIn`}
        >
          <ul className="list-items flex flex-col items-center gap-16">
            <li>
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#works"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
