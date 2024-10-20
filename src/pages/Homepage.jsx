import React from "react";
import { Navbar, Footer, MainDesktop } from "../components/jsx/index";
import { Works, Contact, About } from "./";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <MainDesktop />
        <Works />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
