import React from "react";
import "./stylesheets/MainBox.css";

function MainBox({ imgSrc, heading }) {
  return (
    <div className="box">
      <div className="box__content">
        <img className="box__image" src={imgSrc} alt={heading} />
        <h1 className="box__heading">{heading}</h1>
        <p className="box__content">{`Search for ${heading}`}</p>
      </div>
    </div>
  );
}

export default MainBox;
