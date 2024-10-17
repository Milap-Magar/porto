import React from "react";
import "../css/components.css";

const Line = (props) => {
  return (
    <div className="relative">
      <div className="works-heading absolute text-4xl top-0 left-4">
        {props.heading}{" "}
      </div>
      <div className="bg-black rounded-lg h-[0.2vh] w-[120px] absolute top-10 left-4"></div>
    </div>
  );
};

export default Line;
