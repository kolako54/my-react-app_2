import React from "react";
import LogoSide from "../../assets/aiside.svg";
import './aisidelogo.style.scss'
const SideLogo = () => (
  <div>
    <img className="sidelogo" src={LogoSide} alt="sidelogo" />
  </div>
);
export default SideLogo