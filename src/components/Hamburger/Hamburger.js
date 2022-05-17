import React from "react";
import './Hamburger.css';
import cancel from '../../assets/cancel.png'


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
    <button className="cancel" onClick={!isOpen}><img className="image" src={cancel} alt='cancel button to click out of hamburger menu'/></button>
   }
      </div>
  );
}
