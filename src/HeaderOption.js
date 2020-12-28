import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, text }) {
  return (
    <div className="headeroption">
      <Icon className="headerOption__icon" />
      <p className="headerOption__title">{title}</p>
      <p className="headerOption__text">{text}</p>
    </div>
  );
}

export default HeaderOption;
