import React from "react";

const Animate = (props) => {
  return (
    <button className="ui-btn bg-[rgb(41,41,41)] px-5 py-3 flex items-center justify-center text-white font-semibold text-lg tracking-wide rounded border-none cursor-pointer transition-all duration-300 shadow-md hover:bg-[rgb(51,51,51)]">
      <span className="relative transition-all duration-300 before:absolute before:content-[''] before:bg-inherit hover:text-[#fac921] hover:before:animate-chitchat">
        {props.heading}
      </span>
    </button>
  );
};
export default Animate;
