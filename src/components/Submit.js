import React, { useState } from "react";

import axios from "../axios";
import Select from "react-select";

import Search from "./Search";
function Submit() {
  const [info, setInfo] = useState({
    personSubmitter: "",
    resourceType: "", // remdesivir or stuff
    resourceName: "",
    resourceDescription: "",
    resourceContact: "",
    resourceLocation: {
      state: "",
      city: "",
    },
    resourceType2: "", // subbranch of resource like refilling or empty cyllinder
    resourceVerified: "", // when last verified
  });

  const optionResources = [
    { value: "oxygen", label: "Oxygen" },
    { value: "beds", label: "Beds" },
    { value: "blood", label: "Blood Plasma" },
    { value: "remdesivir", label: "Remdesivir" },
    { value: "medicines", label: "Medicines" },
    { value: "food", label: "Food" },
    { value: "chat", label: "Chat" },
    { value: "ambulance", label: "Ambulance" },
    { value: "testing", label: "Testing centre" },
  ];

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function onResourceChangeHandler(value) {
    setInfo((prevValue) => {
      return {
        ...prevValue,
        resourceType: value,
      };
    });
  }
  function setLocation(state, city) {
    console.log(state, city);
    setInfo((prevValue) => {
      return {
        ...prevValue,
        resourceLocation: {
          state: state.label,
          city: city.value,
        },
      };
    });
  }

  function resourceSubmit(event) {
    axios.post("/submit/resource", {
      personSubmitter: info.personSubmitter,
      resourceType: info.resourceType.value, // remdesivir or stuff
      resourceName: info.resourceName,
      resourceDescription: info.resourceDescription,
      resourceContact: info.resourceContact,
      resourceLocation: {
        state: info.resourceLocation.state,
        city: info.resourceLocation.city,
      },
      resourceType2: info.resourceType2, // subbranch of resource like refilling or empty cyllinder
      resourceVerified: info.resourceVerified, // when last verified
    });
    setInfo({
      personSubmitter: "",
      resourceType: "", // remdesivir or stuff
      resourceName: "",
      resourceDescription: "",
      resourceContact: "",
      resourceLocation: {
        state: "",
        city: "",
      },
      resourceType2: "", // subbranch of resource like refilling or empty cyllinder
      resourceVerified: "", // when last verified
    });
    event.preventDefault();
  }

  return (
    <div>
      <div className="mt-8">
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form onSubmit={resourceSubmit}>
            <label>Your name:</label>
            <input
              required
              className="my-1 p-1 w-full"
              onChange={(event) => {
                onChangeHandler(event);
              }}
              name="personSubmitter"
              placeholder="Eg: Mehul"
              id="personSubmitter"
              value={info.personSubmitter}
              type="text"
            />
            <label>Resource Name</label>
            <input
              required
              className="my-1 p-1 w-full"
              onChange={(event) => {
                onChangeHandler(event);
              }}
              name="resourceName"
              placeholder="Eg: Seva Bharati Camp"
              id="resourceName"
              value={info.resourceName}
              type="text"
            />
            <label>Resource Description</label>
            <input
              required
              className="my-1 p-1 w-full"
              onChange={(event) => {
                onChangeHandler(event);
              }}
              name="resourceDescription"
              placeholder="Eg: Organisation that gives plasma"
              id="resourceDescription"
              value={info.resourceDescription}
              type="text"
            />
            <label>Resource Type</label>
            <Select
              options={optionResources}
              className="my-1 p-1 w-full"
              onChange={onResourceChangeHandler}
              name="resourceType"
              placeholder="Eg: Remdesivir, Oxygen, Plasma"
              id="resourceType"
              value={info.resourceType}
              type="text"
            />
            <label>Resource Location</label>
            <Search
              searchData={setLocation}
              className="my-1 p-1 w-full"
              buttonText="Enter location"
            />
            <label>Resource Contact</label>
            <input
              required
              className="my-1 p-1 w-full"
              onChange={(event) => {
                onChangeHandler(event);
              }}
              name="resourceContact"
              placeholder="Eg: 9123284657"
              id="resourceContact"
              value={info.resourceContact}
              type="tel"
              pattern="[0-9]{10}"
            />
            <label>Resource Verified last</label>
            <input
              required
              className="my-1 p-1 w-full"
              onChange={(event) => {
                onChangeHandler(event);
              }}
              name="resourceVerified"
              placeholder="Eg: Choose the date and time"
              id="resourceVerified"
              value={info.resourceVerified}
              type="datetime-local"
            />
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Submit;
