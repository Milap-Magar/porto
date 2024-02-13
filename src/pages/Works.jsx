import React from "react";
import "../components/css/components.css";
import { Line, Card } from "../components/jsx";

const Works = () => {
  return (
    <>
      <div id="works">
        <div className="work-section w-full h-[1300px] md:h-screen relative">
          <Line heading="Projects" />
          <div className="works-container gap-12 m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly md:pt-28 pt-96">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
