import React from "react";
import "./steps.style.scss";
import {withRouter} from "react-router-dom"
const Steps = ({match}) => {
const {path} = match;
const pageNumber = path.split("/")[2];
console.log(pageNumber);

  return (
    <div className="steps">
      <div className={`step ${pageNumber === "step-1" ? "step-1" : null}`}>
        <p> اطلاعات شخصی </p>
      </div>
      <div className={`step ${pageNumber === "step-2" ? "step-2" : null}`}>
        <p> اطلاعات شغلی </p>
      </div>
      <div className={`step ${pageNumber === "step-3" ? "step-3" : null}`}>
        <p> اطلاعات حقوقی </p>
      </div>
      <div className={`step ${pageNumber === "step-4" ? "step-4" : null}`}>
        <p> تایید نهایی </p>
      </div>
    </div>
  );
};


export default withRouter(Steps);

