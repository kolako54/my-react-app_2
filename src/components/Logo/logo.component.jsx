import React from "react";
import Logo from "../../assets/Logo.svg";
import "./logo.style.scss";
import Title from "./title/title.component";

const IconLogo = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <Title />
      </div>
    </>
  );
};
export default IconLogo;
