import React from "react";
import "../css/input.css";

const Input = (props) => {
  return (
    <>
      <div class="inputbox">
        <input required="required" type="text" />
        <span>{props.value}</span>
        <i></i>
      </div>
    </>
  );
};

export default Input;
