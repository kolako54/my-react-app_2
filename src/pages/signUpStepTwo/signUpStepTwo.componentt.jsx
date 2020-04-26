import React from "react";
import "./signUpStepTwo.style.scss";
import Logo from "../../components/Logo/logo.component";
import Steps from "../../components/steps/steps.component";
import TwoTitr from "../../components/twotitr/twotitr.component";
import BoxItem from "../../components/box-item/box-item.component";
import CheckBtns from "../../components/checkbtns/checkbtns.component";
import { Link } from "react-router-dom";
const SignUpStepTwo = () => {
  return (
    <div className="containers">
      <div className="steptwo-container">
        <Logo className="logo" />
        <Steps />
        <TwoTitr />
        <BoxItem />
        <CheckBtns />
        <div className="btn-container">
          <Link to="/sign-up/step-1">
            <button>مرحله قبل</button>
          </Link>
          <Link to="/sign-up/step-3">
            <button>مرحله بعد</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUpStepTwo;
