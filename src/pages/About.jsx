import React from "react";
import { Line } from "../components/jsx";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="about-section w-full h-screen bg-inherit">
          <Line heading="About" />
          {/* <Input value="Name" /> */}
        </div>
      </div>
    </>
  );
};

export default About;
