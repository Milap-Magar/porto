import React from "react";
import search from "../../assets/search.png";
import "../css/NewButton.css";

const NewButton = () => {
  return (
    <div>
      <button className="btn">
        <p className="para font-kod text-base">View Project</p>
        <img className="svg w-4 h-4" src={search} />
      </button>
    </div>
  );
};

export default NewButton;
