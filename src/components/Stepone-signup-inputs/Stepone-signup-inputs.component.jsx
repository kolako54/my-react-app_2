import React, { useState } from "react";
import "./Stepone-signup-inputs.style.scss";
import {Link, withRouter} from "react-router-dom"

const InputsStepOne = ({match}) => {
  
  const [isChecked, setChecked] = useState("apple");
  const submitHandle = (event) => {
    event.preventDefault();
  };
  const handleRadio = (check) => {
    setChecked(([check.target.name] = check.target.value));
  };
  return (
    <form className="container-input" onSubmit={submitHandle}>
  
      <div className="form-field">
        <p> نام </p>

        <input type="text" />
      </div>
      <div className="form-field">
        <p> نام خانوادگی </p>
        <input type="text" />
      </div>
      <div className="form-field">
        <p> کد ملی </p>
        <input type="number" />
      </div>
      <div className="form-field">
        <p> ایمیل </p>
        <input type="email" />
      </div>
      <div className="form-field">
        <p> جنسیت </p>
        <div className="container-radio">
          <input
            type="radio"
            onChange={handleRadio}
            name="radio1"
            value="orange"
            checked={isChecked === "orange"}
          />
          <p>مرد</p>
          <input
            type="radio"
            onChange={handleRadio}
            name="radio1"
            value="apple"
            checked={isChecked === "apple"}
          />
          <p>زن</p>
        </div>
      </div>
      <div className="form-field">
        <p>تاریخ تولد</p>
        <div className="container-date">
          <div className="subdate">
            <p> روز</p>
            <input type="text" />
          </div>
          <div className="subdate">
            <p> ماه</p>
            <input type="text" />
          </div>
          <div className="subdate">
            <p> سال</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="form-field">
        <p> انتخاب استان </p>
        <select id="ostan">
          <option value="mashad">خراسان رضوی</option>
          <option value="tehran">تهران</option>
          <option value="esfahan">فارس</option>
          <option value="shiraz">خوزستان</option>
        </select>
      </div>
      <div className="form-field">
        <p> انتخاب شهرستان </p>
        <select id="ostan">
          <option value="mashad">قم</option>
          <option value="tehran">نیشابور</option>
          <option value="esfahan">ارومیه</option>
          <option value="shiraz">اردبیل</option>
        </select>
      </div>
      <div className="form-field">
        <p> آدرس </p>
        <textarea />
      </div>
      <div className="form-field">
        <p> کد پستی </p>
        <input type="number" />
      </div>
      <div className="form-field">
        <p>تلفن ثابت</p>
        <div className="tel-container">
          <input type="text" />
          <input type="number" style={{ width: "50px" }} />
        </div>
      </div>
      <div className="form-field">
        <p>تلفن همراه</p>
        <div className="tel-container">
          <input type="text" />
          <input type="number" style={{ width: "50px" }} />
          <input type="submit" value="ویرایش" />
        </div>
      </div>
      <div className="form-field">
        <Link to="./step-2" style={{ margin: "auto" }}>
          <button>مرحله بعد</button>
        </Link>
      </div>
    </form>
  );
};

export default withRouter(InputsStepOne);
