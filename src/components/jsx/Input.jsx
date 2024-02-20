import React from "react";
import "../css/input.css";

const Input = (props) => {
  return (
    <>
      <div className="inputbox">
        <input required="required" type="text" />
        <span>{props.value}</span>
        <i></i>
      </div>
      <br />
    </>
  );
};

export default Input;
