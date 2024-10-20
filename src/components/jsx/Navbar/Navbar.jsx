import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image from "../../../../public/logo1.svg";
import "../../css/components.css";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  function onNavScroll() {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-[200 ]w-full h-[10vh]"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-90 z-50 blur-effect-theme bg-[#565454] text-white"
        }
      >
        <nav className="m-auto flex items-start justify-between">
          <figure className="logo">
            <a href="#main">
              <img
                src={image}
                alt="Logo image"
                className="h-16 w-28 cursor-pointer"
              />
            </a>
          </figure>
          <div className="my-4 flex gap-10 mx-4">
            <a href="#works">Works</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
