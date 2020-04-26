import React from 'react'
import './checkbtns.style.scss'
const CheckBtns = () => {
    return (
      <div className="checkbtns-container">
        <label>
          <input type="checkbox" />
          دامدار
        </label>
        <label>
          <input type="checkbox" />
          باغبان
        </label>
        <label>
          <input type="checkbox" />
          زارع
        </label>
      </div>
    );
}
export default CheckBtns