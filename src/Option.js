import { Avatar } from "@material-ui/core";
import React from "react";
import "./Option.css";

function Option({ Icon, title, text }) {
  return (
    <div className="option">
      <Icon className="option__icon" />
      <div className="option__info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Option;
