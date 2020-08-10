import React from "react";
import "./header.styles.scss";
import LogoMain from "../logo/logo.component";
import InputBox from "../inputBox/inputBox.component";
import HeaderOptions from "../headerOptions/headerOptions.component";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <LogoMain />
        <InputBox />
        <HeaderOptions />
      </div>
    </header>
  );
};

export default Header;
