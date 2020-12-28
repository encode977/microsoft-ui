import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import CloudIcon from "@material-ui/icons/Cloud";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__leftImage"
          src="https://lh3.googleusercontent.com/a-/AOh14GitlVfMTIl9fQmBp72Zah_E2fYMKg0ZtWwAAdFIdQ=s96-c-rg-br100"
        />
        <div className="header__leftInfo">
          <h2 className="header__username">Lokendra Dangi</h2>
          <p className="header__email">pachar.com@gmail.com</p>
          <p className="header__manage">My Microsoft Account</p>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={CloudIcon} title="OneDrive" text="Manage" />
        <HeaderOption
          Icon={SystemUpdateAltIcon}
          title="Windows Update"
          text="Last Checked: 5 hours ago"
        />
      </div>
    </div>
  );
}

export default Header;
