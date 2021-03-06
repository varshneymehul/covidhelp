import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { v4 as uuidv4 } from "uuid";

import axios from "../axios.js";
import Resource from "./Resource";
import Search from "./Search";

function ResourcePage() {
  const [resources, setResources] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  function searchData(state, city) {
    setState(state.label);
    setCity(city.value);
    if (isClicked === true) {
      setIsClicked(false);
    } else if (isClicked === false) {
      setIsClicked(true);
    }
  }
  
  const resourceRequestedSmallCase = window.location.pathname;
  const fetchData = async () => {
    console.log("fetchData function begin");
    await axios
      .get(`${resourceRequestedSmallCase}`, { params: { state: state, city: city } })
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
    <div style={{padding:"20px"}}>
      <Search searchData={searchData} />
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

export default ResourcePage;
