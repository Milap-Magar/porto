import React from "react";
import { Main, Navbar } from "../components/jsx/index";
import Works from "./Works";
import About from "./About";
import Contact from "./Contact";

const Landing = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Main />
        <Works />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
