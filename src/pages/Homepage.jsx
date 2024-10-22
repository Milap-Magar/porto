import React from "react";
import { Navbar, Footer, MainDesktop } from "../components/jsx/index";
import { Works, Contact, About } from "./";
import Sidebar from "../components/jsx/Social/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Sidebar />
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
