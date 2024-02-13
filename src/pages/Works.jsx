import React from "react";
import "../components/css/components.css";
import { Line } from "../components/jsx";

const Works = () => {
  return (
    <>
      <div id="works">
        <div className="work-section w-full h-screen relative ">
          <Line heading="Projects" />
          <div className="works-container"></div>
        </div>
      </div>
    </>
  );
};

export default Works;
