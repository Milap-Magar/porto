import React from "react";
import NewButton from "./NewButton";

const Card = (props) => {
  return (
    <div className="w-auto h-auto bg-slate-200 shadow-xl shadow-emerald-300 rounded-xl">
      <figure className="w-full h-[180px]">
        <img src={props.image} alt="project/images" />
      </figure>
      <div className="my-0 md:my-1 mx-4">
        <h1 className="md:text-base font-extrabold lg:text-xl font-kod">
          {props.heading}
        </h1>
        <p className="text-xs lg:text-sm font-kod">{props.desc}</p>
        <a href={props.link} target="_blank">
          <NewButton value="View Project" />
        </a>
      </div>
    </div>
  );
};

export default Card;
