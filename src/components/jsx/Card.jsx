import React from "react";
import NewButton from "./NewButton";

const Card = (props) => {
  return (
    <div className="w-[80vw] sm:w-[40vw] md:w-[40vw] lg:w-[28vw] h-[350px] sm:h-[38vh] md:h-[42vh] lg:h-[69vh] bg-slate-200 shadow-xl shadow-amber-100">
      <figure className="w-full h-[180px]">
        <img src={props.image} alt="project/images" />
      </figure>
      <div className="my-0 md:my-1 mx-4">
        <h1 className="md:text-base font-extrabold lg:text-xl font-kod">
          {props.heading}
        </h1>
        <p className="text-xs lg:text-sm font-kod">{props.desc}</p>
        <NewButton />
      </div>
    </div>
  );
};

export default Card;
