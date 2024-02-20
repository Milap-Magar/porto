import React from "react";
import search from "../../assets/search.png";
import "../css/NewButton.css";

const NewButton = (props) => {
  return (
    <div>
      <button className="btn">
        <p className="para font-kod text-base">{props.value}</p>
        <img className="svg w-4 h-4" src={search} />
      </button>
    </div>
  );
};

export default NewButton;
