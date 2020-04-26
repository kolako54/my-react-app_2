import React from 'react'
import './button.style.scss'


const Buttons = (props) => (
  <div>
    <button className="button">{props.children}</button>
  </div>
);
export default Buttons