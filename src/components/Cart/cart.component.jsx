import React from "react";
import "./cart.style.css";
import Logo from "../Logo/logo.component";
import SideLogo from "../aisidelogo/aisidelogo.component";
import Inputs from '../inputs/inputs.component'


const CartLogin = () => {
  return (
    <div className="card-container">
      <div className="cart">
        <Logo />
        <SideLogo />
        <Inputs />
      </div>
    </div>
  );
};

export default CartLogin;
