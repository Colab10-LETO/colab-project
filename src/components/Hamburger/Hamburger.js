import React from "react";
import './Hamburger.css'
export default function Hamburger({ isOpen }) {
  return (
      <div>
   {!isOpen
    ? <div className="hamburger">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
    : 
    <button className="cancel" onClick={!isOpen}>X</button>
   }
      </div>
  );
}
