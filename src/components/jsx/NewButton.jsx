import React from "react";
import search from "../../assets/search.png";
import "../css/NewButton.css";

const NewButton = (props) => {
  const handleClick = () => {
    // Call the onSubmit or handleSubmit function passed as a prop
    if (props.onSubmit) {
      props.onSubmit();
    }
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        <p className="para font-kod text-base">{props.value}</p>
        <img className="svg w-4 h-4" src={search} />
      </button>
    </div>
  );
};

export default NewButton;
