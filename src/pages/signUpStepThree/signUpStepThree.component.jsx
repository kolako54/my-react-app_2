import React from "react";
import "./signUpStepThree.style.scss";
import Steps from "../../components/steps/steps.component";
import Logo from "../../components/Logo/logo.component";
import {Link} from 'react-router-dom'
const ThreeStep = () => {
  return (
    <div className="Container">
      <div className="threeStep">
        <Logo className="logo" />
        <Steps />
        <div className="inputThree">
          <p className="ptext">شماره حساب</p>
          <form method="get">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
        <div className="btn-container">
          <Link to="/sign-up/step-2">
            <button>مرحله قبل</button>
          </Link>
          <Link to="/sign-up/step-4">
            <button>مرحله بعد</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ThreeStep;
