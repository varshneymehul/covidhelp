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
      <h1>Our whatsapp group</h1>
      <br />
      <a href="https://chat.whatsapp.com/KqJ5sk1fbpT2HDDnmyhaJS">
        Whatsapp group for help
      </a>
      <br />
      <h1>Other resources websites</h1>
      <br />
      <a href="https://covidresources.in">CovidResources.in</a>
      <br />
      <a href="https://medicaljugad.in">MedicalJugad.in</a>
      <br />
      <a href="https://t.me/oxygen">Telegram group for oxygen resources</a>
      <br />
      <a href="https://discord.gg/XSapeD6XR5">
        Immensely useful Discord server
      </a>
      <br />
      <h1></h1>
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
      <h1>Hospital Beds availability</h1>
      <br />
      <h4> Gurgaon</h4>

      <a href="http://covidggn.com/">http://covidggn.com/</a>

      <h4> Delhi</h4>

      <a href="https://coviddelhi.com/">https://coviddelhi.com/</a>

      <h4> Thane</h4>

      <a href="https://covidthane.org/availabiltyOfHospitalBeds.html">
        https://covidthane.org/availabiltyOfHospitalBeds.html
      </a>

      <h4> Bengaluru</h4>

      <a href="https://covidbengaluru.com/">https://covidbengaluru.com/</a>

      <h4> Andhra Pradesh</h4>

      <a href="https://covidaps.com/">https://covidaps.com/</a>

      <h4> Telangana</h4>

      <a href="https://covidtelangana.com/">https://covidtelangana.com/</a>

      <h4> West Bengal</h4>

      <a href="https://covidwb.com/">https://covidwb.com/</a>

      <h4> Pune</h4>

      <a href="https://covidpune.com/">https://covidpune.com/</a>

      <h4> Ahmedabad</h4>

      <a href="https://covidamd.com/">https://covidamd.com/</a>

      <a
        href="      https://ahna.org.in/covid19.html
"
      >
        https://ahna.org.in/covid19.html
      </a>
      <h4> Vadodara</h4>

      <a href="https://covidbaroda.com/">https://covidbaroda.com/</a>

      <h4> Nagpur</h4>

      <a href="http://nsscdcl.org/covidbeds/AvailableHospitals.jsp">
        http://nsscdcl.org/covidbeds/AvailableHospitals.jsp
      </a>

      <h4> Nashik</h4>

      <a href="https://covidnashik.com/">https://covidnashik.com/</a>

      <h4> Madhya Pradesh</h4>

      <a href="https://covidmp.com/">https://covidmp.com/</a>

      <h4> Uttar Pradesh</h4>

      <a href="http://dgmhup.gov.in/en/CovidReport">
        http://dgmhup.gov.in/en/CovidReport
      </a>

      <h4> Rajasthan </h4>

      <a href="https://covidinfo.rajasthan.gov.in/COVID19HOSPITALBEDSSTATUSSTATE.aspx">
        https://covidinfo.rajasthan.gov.in/COVID19HOSPITALBEDSSTATUSSTATE.aspx
      </a>

      <h4> Bhopal</h4>

      <a href="https://bhopalcovidbeds.in/">https://bhopalcovidbeds.in/</a>

      <h4> Haryana</h4>

      <a href="https://coronaharyana.in/">https://coronaharyana.in/</a>

      <h4>Tamil nadu</h4>
      <a href="https://covidtnadu.com/">https://covidtnadu.com/</a>

      <a
        href=" https://stopcorona.tn.gov.in/beds.php
      "
      >
        https://stopcorona.tn.gov.in/beds.php
      </a>
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
    </div>
  );
}

export default UsefulLinks;
