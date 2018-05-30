import React from "react";
import "./Button.css";

export default props => {
  return (
    <button className="btn" type="button" onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};
