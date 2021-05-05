import React from "react";
import "./stylesheets/MainBox.css";

function HeadingBox({ imgSrc, heading }) {
  return (
    <div className="box">
      <div className="box__content">
        <img className="box__image" src={imgSrc} alt={heading} />
        <h1>{heading}</h1>
        <p>{`Search for ${heading}`}</p>
      </div>
    </div>
  );
}

export default HeadingBox;
