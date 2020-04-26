import React from "react";
import "./signUpStepFour.style.scss";
import Steps from "../../components/steps/steps.component";
import Logo from "../../components/Logo/logo.component";
import {Link} from 'react-router-dom'
const SignUpStepFour = () => {
  return (
    <div className="final-container">
      <div className="final">
        <Logo className="logo" />
        <Steps />
        <div className="rules">
          <div>
            {" "}
            <input type="checkbox" />
            <span>با قوانین و مقررات سایت موافقم</span>
          </div>

          <div>
            <u>
              <i>مشاهده قوانین</i>
            </u>
          </div>
        </div>
        <div className="btn-container">
          <Link to="/sign-up/step-3">
            <button>مرحله قبل</button>
          </Link>
          <Link to="/">
            <button>تایید نهایی</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUpStepFour;
