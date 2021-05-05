import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import {v4 as uuidv4} from "uuid";

import axios from "../axios.js";
import Resource from "./Resource";
import Search from "./Search";

function Food() {
  const [resources, setResources] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  function searchFood(state, city) {
    setState(state.label);
    setCity(city.value);
    setIsClicked(true);
  }

  const fetchData = async () => {
    console.log("fetchData function begin");
    await axios
      .get("/food", { params: { state: state, city: city } })
      .then((res) => {
        console.log("Data fetched");
        console.log(res.data);
        setResources(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [isClicked]);

  return (
    <div>
      <Search searchData={searchFood} />
      {resources && (
        <Container fluid>
          <Row>
            {resources.map((resource) => {
              return (
                <Resource
                                  key={uuidv4()}

                  resourceType={resource.resourceType}
                  resourceName={resource.resourceName}
                  resourceDescription={resource.resourceDescription}
                  resourceContact={resource.resourceContact}
                  resourceCity={resource.resourceLocation.city}
                  resourceState={resource.resourceLocation.state}
                  resourceType2={resource.resourceType2}
                  resourceVerified={resource.resourceVerified}
                  personSubmitter={resource.personSubmitter}
                />
              );
            })}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Food;
