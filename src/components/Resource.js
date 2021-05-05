import React from "react";

import { Col } from "react-bootstrap";
import "./stylesheets/Resource.css";
import check from "../assets/check.svg";
function Resource({
  personSubmitter,
  resourceType,
  resourceName,
  resourceDescription,
  resourceContact,
  resourceCity,
  resourceState,
  resourceType2,
  resourceVerified,
}) {
  return (
    <Col lg={4}>
      <div className="resource">
        <div className="resource__verified">
          <img src={check} alt="check mark" />
          Verified
        </div>
        <br />
        Submitted by: {personSubmitter}
        <h1 className="heading">{resourceName}</h1>
        <br />
        <p className="text">{resourceDescription}</p>
        <br />
        <p className="text">Contact at: {resourceContact}</p>
        <br />
        <p className="text">
          Location: {resourceCity} {resourceState}
        </p>
        <br />
        Resource verified last at:{resourceVerified}
        <br/>
        Time in YYYY-MM-DD Format HH:MM
      </div>
    </Col>
  );
}

export default Resource;
