import React from "react";
import '../css/Button.css'


const Button = (props) => {
  return (
    <button className="ui-btn">
      <span>{props.name}</span>
    </button>
  );
};

export default Button;
