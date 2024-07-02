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
