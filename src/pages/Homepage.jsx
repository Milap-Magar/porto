import React from "react";
import { Main, Navbar, Button } from "../components/jsx/index";

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
      </div>
    </>
  );
};

export default HomePage;
