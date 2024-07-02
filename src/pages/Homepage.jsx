import React from "react";
import { Main, Navbar, Button, Footer } from "../components/jsx/index";
import Works from "./Works";
import About from "./About";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="absolute right-0 top-5">
          <a href="#contact">
            <Button name="Contact Me" />
          </a>
        </div>
        <Main />
        <Works />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
