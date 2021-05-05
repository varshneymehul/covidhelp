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
        <br /> <br />
        Submitted by: {personSubmitter}
        <br />
        {resourceName && (
          <div>
            <h1 className="resource__heading">Resource Name</h1>
            <br />
            {resourceName}
            <br />
          </div>
        )}
        {resourceDescription && (
          <div>
            <h1 className="resource__heading">Resource Description</h1>
            <br />
            {resourceDescription}
            <br />
          </div>
        )}
        <h1 className="resource__heading">Resource Contact</h1>
        <br />
        Contact at: 0{resourceContact}
        <br />
        {resourceCity && resourceState ? (
          <div>
            {" "}
            <h1 className="resource__heading">Resource Location</h1>
            <br />
            Location: {resourceCity}, {resourceState}
            <br />
          </div>
        ) : (
          <div>
            {" "}
            <h1 className="resource__heading">Resource Location</h1>
            <br />
            Location: All INDIA availability
            <br />
          </div>
        )}
        <h1 className="resource__heading">Resource Verified:</h1>
        <br />
        Resource verified last at:{resourceVerified}
        Time in YYYY-MM-DD Format HH:MM
        <br />
      </div>
    </Col>
  );
}

export default Resource;
