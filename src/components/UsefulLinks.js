import { Button, Col, Form } from "react-bootstrap";
import React, { useState } from "react";

import "./stylesheets/UsefulLinks.css";
function UsefulLinks() {
  const [input, setInput] = useState("");
  function handleInputChange(event) {
    setInput(event.target.value);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Run a twitter search for Oxygen/Blood Plasma</h1>
      <Form>
        <Form.Row
          style={{
            marginLeft: "0",
            marginRight: "0",
            justifyContent: "center",
          }}
        >
          <Col xs="auto">
            <Form.Group controlId="formCityName">
              <Form.Control
                value={input}
                onChange={handleInputChange}
                name="cityName"
                type="text"
                placeholder="Enter city name"
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Button
              target="_blank"
              href={`https://twitter.com/search?q=verified%20${input}%20(bed%20OR%20beds%20OR%20icu%20OR%20oxygen%20OR%20ventilator%20OR%20ventilators%20OR%20fabiflu)%20-%22not%20verified%22%20-%22unverified%22%20-%22needed%22%20-%22required%22&f=live`}
              variant="outline-primary"
              type="submit"
            >
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>

      <br />
      <a
        href="https://twitter.com/search?q=verified%20Delhi%20(bed%20OR%20beds%20OR%20icu%20OR%20oxygen%20OR%20ventilator%20OR%20ventilators%20OR%20fabiflu)%20-%22not%20verified%22%20-%22unverified%22%20-%22needed%22%20-%22required%22&f=live"
        target="_blank"
        rel="noopener noreferrer"
      >
        Delhi
      </a>
      <br />
      <a
        href="https://twitter.com/search?q=verified%Mumbai%20(bed%20OR%20beds%20OR%20icu%20OR%20oxygen%20OR%20ventilator%20OR%20ventilators%20OR%20fabiflu)%20-%22not%20verified%22%20-%22unverified%22%20-%22needed%22%20-%22required%22&f=live"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mumbai
      </a>
      <br />
      <a
        href="https://twitter.com/search?q=verified%Kolkatta%20(bed%20OR%20beds%20OR%20icu%20OR%20oxygen%20OR%20ventilator%20OR%20ventilators%20OR%20fabiflu)%20-%22not%20verified%22%20-%22unverified%22%20-%22needed%22%20-%22required%22&f=live"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kolkatta
      </a>
      <br />
      <a
        href="https://twitter.com/search?q=verified%Lucknow%20(bed%20OR%20beds%20OR%20icu%20OR%20oxygen%20OR%20ventilator%20OR%20ventilators%20OR%20fabiflu)%20-%22not%20verified%22%20-%22unverified%22%20-%22needed%22%20-%22required%22&f=live"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lucknow
      </a>
      <br />
      <a
        href="https://twitter.com/search?q=verified%Hyderabad%20(bed%20OR%20beds%20OR%20icu%20OR%20oxygen%20OR%20ventilator%20OR%20ventilators%20OR%20fabiflu)%20-%22not%20verified%22%20-%22unverified%22%20-%22needed%22%20-%22required%22&f=live"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hyderabad
      </a>
      <br />
      <h1>Government Websites</h1>
      <br />
      <a href="https://www.cowin.gov.in/home">Vaccine Registration</a>
      <br />
      <a href="https://www.who.int/health-cluster/news-and-events/news/COVID19-Resources/en/">
        WHO Guidelines
      </a>
      <br />
      <a href="https://covidplasma.online/">Plasma Therapy</a>
      <br />
      <a href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN&gl=US">
        Aarogya Setu App
      </a>
      <h1>Other resources websites</h1>
      <br />
      <a href="https://covidresources.in">CovidResources.in</a>
      <br />
      <a href="https://medicaljugad.in">MedicalJugad.in</a>
      <br />
    </div>
  );
}

export default UsefulLinks;
