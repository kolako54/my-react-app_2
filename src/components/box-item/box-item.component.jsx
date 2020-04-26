import React, { useState } from "react";
import "./box-item.style.scss";
const BoxItem = () => {
  const [borderColor1, setBorderColor1] = useState("fill-border1");
  const [borderColor2, setBorderColor2] = useState("");
    const [borderColor3, setBorderColor3] = useState("");
  const handleBox1 = (e) => {
    setBorderColor1("fill-border1");
     setBorderColor2("");
       setBorderColor3("");
  };
  const handleBox2 = (e) => {
    setBorderColor2("fill-border2");
    setBorderColor1("");
      setBorderColor3("");
  };
   const handleBox3 = (e) => {
     setBorderColor3("fill-border3");
     setBorderColor1("");
     setBorderColor2("");
   };
  return (
    <div className="box-container">
      <div className={`box ${borderColor1}`} onClick={handleBox1}>
        کشاورز
      </div>
      <div className={`box ${borderColor2}`} onClick={handleBox2}>
        جویای کار
      </div>
      <div
        className={`box ${borderColor3}`}
        onClick={handleBox3}
      >
        فلان و بهمان
      </div>
    </div>
  );
};
export default BoxItem;
