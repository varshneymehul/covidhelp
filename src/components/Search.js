import React, { useState } from "react";

import Select from "react-select";
import csc from "country-state-city";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./stylesheets/Search.css";

function Search(props) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  
  function handleStateChange(value) {
    setState(value);
    setCity("");
  }

  function handleCityChange(value) {
    setCity(value);
  }

  const states = csc.getStatesOfCountry("IN");

  const statesFiltered = states.map((state) => {
    return {
      value: state.isoCode,
      label: state.name,
    };
  });

  if (state) {
    var cities = csc.getCitiesOfState("IN", state.value);

    if (state.value === "DL") {
      var citiesFiltered = [
        {
          value: "Delhi",
          label: "Delhi",
        },
      ];
    } else {
      var citiesFiltered = cities.map((cities) => {
        return {
          value: cities.name,
          label: cities.name,
        };
      });
    }
  }
  return (
    <div>
      <Container fluid>
        <Row className="py-3">
          <Col>
            <Select
              options={statesFiltered}
              value={state}
              onChange={handleStateChange}
            />
          </Col>
          {state && cities && (
            <Col>
              <Select
                value={city}
                onChange={handleCityChange}
                options={citiesFiltered}
              />
            </Col>
          )}
          {state && cities && (
            <Col>
              <Button
                disabled={city ? false : true}
                className="search"
                variant="outline-success"
                onClick={() => {
                  props.searchData(state, city);
                }}
              >
                {props.buttonText ? props.buttonText : "Search"}
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Search;
