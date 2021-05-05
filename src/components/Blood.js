import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import axios from "../axios.js";
import Resource from "./Resource";
import Search from "./Search";

function Blood() {
  const [resources, setResources] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  function searchBlood(state, city) {
    setState(state.label);
    setCity(city.value);
    setIsClicked(true);
  }

  const fetchData = async () => {
    console.log("fetchData function begin");
    await axios
      .get("/blood", { params: { state: state, city: city } })
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
      <Search searchData={searchBlood} />
      {resources && (
        <Container fluid>
          <Row>
            {resources.map((resource) => {
              return (
                <Resource
                  resourceType={resource.resourceType}
                  resourceName={resource.resourcename}
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

export default Blood;
