import React, { useState } from "react";
import Button from "../buttons/button.component";
import "./input.style.scss";
import { Link } from "react-router-dom";

const Inputs = () => {
  const [passwordInput, setPasswordInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const handleChange = (sometext) => {
    const value = sometext.target.value;
    setTextInput(value);
  };
  const handleUser = (sometext) => {
    const value = sometext.target.value;
    setPasswordInput(value);
  };
  return (
    <div className="form">
      <form method="post">
        <input
          type="text"
          placeholder="نام کاربری"
          onChange={handleChange}
          value={textInput}
        />
      </form>
      <form method="post">
        <input
          type="password"
          placeholder="رمز عبور"
          onChange={handleUser}
          value={passwordInput}
        />
      </form>
      <div className="containerBtn">
        <Button className="btn">ورود</Button>
        <Link to="/sign-up/step-1">
          <Button className="btn">ثبت نام</Button>
        </Link>
      </div>
    </div>
  );
};

export default Inputs;
