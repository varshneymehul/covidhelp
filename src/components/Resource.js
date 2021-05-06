import React, { useState } from "react";

import { Button, Col, Collapse } from "react-bootstrap";
import "./stylesheets/Resource.css";
import check from "../assets/check.svg";
import { data } from "jquery";

const LocalDateTime = require("@js-joda/core").LocalDateTime;

function Resource({
  personSubmitter,
  resourceContact,
  resourceContact2,
  resourceType,
  resourceName,
  resourceDescription,
  resourceCity,
  resourceState,
  resourceType2,
  resourceVerified,
}) {
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState("");
  if (resourceVerified) {
    var date = LocalDateTime.parse(resourceVerified);
    var dateYear = date.year(); //2021
    var dateMonth = date.month(); // April
    var dateDay = date.dayOfMonth(); // 26
    var dateHour = date.hour(); // 23
    var dateMinute = date.minute(); // 55
    var textToCopy = `Resource name is: ${resourceName}, Resource type is: ${resourceType}, ${
      resourceType2 &&
      `More information about Resource type is: ${resourceType2}`
    }, Resource description is: ${resourceDescription} Resource is available at: ${
      resourceCity ? resourceCity : "All India availability"
    },${
      resourceState && resourceState
    }; Resource was last verified on ${dateHour}:${dateMinute} on ${dateDay}, ${dateMonth} ${dateYear}`;
  }
  return (
    <Col lg={4}>
      <div className="resource">
        <div className="resource__header">
          <div className="resource__verified">
            Submitted by:<b>{personSubmitter}</b>
            <img src={check} alt="check mark" />
            Verified
          </div>
          <br />
          <h1 className="resource__heading">Name:</h1>
          {resourceName ? resourceName : "Not available"}
          <br />
          <h1 className="resource__heading">Location: </h1>
          {resourceCity ? resourceCity : "All India availability"},{" "}
          {resourceState && resourceState}
          <br />
          <h1 className="resource__heading">Contact</h1>
          Tap to call at:
          <a className="resource__link" href={`tel:${resourceContact}`}>
            0{resourceContact}
          </a>
        </div>
        <div className="resource__body">
          <h1 className="resource__heading">Description</h1>
          {resourceDescription ? resourceDescription : "None available"}
          <br />

          <Button
            variant={isCopied ? "success" : "danger"}
            style={{ marginRight: "10px" }}
            onClick={() => {
              setIsCopied(true);
              navigator.clipboard.writeText(textToCopy);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
          >
            {isCopied ? "Copied" : "Copy"}
          </Button>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open}
          >
            Show more
          </Button>
          <Collapse in={open}>
            <div id="collapse-text">
              <h1 className="resource__heading">Resource Type Information:</h1>
              {resourceType2 ? resourceType2 : "None available"}
              <br />
              {resourceContact2 && (
                <div>
                  <h1 className="resource__heading">Contact 2:</h1>
                  Tap to call at:
                  <a
                    className="resource__link"
                    href={`tel:${resourceContact2}`}
                  >
                    0{resourceContact2}
                  </a>
                </div>
              )}
              {resourceVerified && (
                <div>
                  <h1 className="resource__heading">Resource Verified:</h1>
                  {`${dateHour}:${dateMinute} on ${dateDay}, ${dateMonth} ${dateYear}`}{" "}
                  <br />
                </div>
              )}
            </div>
          </Collapse>
        </div>

        {/* <div className="resource">
        <div className="resource__verified">
          Submitted by: {personSubmitter}
          <img src={check} alt="check mark" />
          Verified
        </div>
        <br /> <br />
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
        {resourceType2 && (
          <div>
            <h1 className="resource__heading">Resource Type Information:</h1>
            <br />
            {resourceType2}
            <br />
          </div>
        )}
        <h1 className="resource__heading">Resource Contact</h1>
        <br />
        Tap to call <br />
        Contact at:{" "}
        <a className="resource__link" href={`tel:${resourceContact}`}>
          0{resourceContact}
        </a>
        {resourceContact2 && (
          <div>
            <h1 className="resource__heading">Resource Contact</h1>
            <br />
            Tap to call <br />
            Contact at:{" "}
            <a className="resource__link" href={`tel:${resourceContact2}`}>
              0{resourceContact2}
            </a>
          </div>
        )}
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
        Resource verified last: <br />
        {`${dateHour}:${dateMinute} on ${dateDay}, ${dateMonth} ${dateYear}`}{" "}
        <br />
      </div> */}
      </div>
    </Col>
  );
}

export default Resource;
