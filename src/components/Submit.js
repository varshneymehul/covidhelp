import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import axios from "../axios";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

import Search from "./Search";
function Submit() {
  const [info, setInfo] = useState({
    personSubmitter: "",
    resourceType: "", // remdesivir or stuff
    resourceName: "",
    resourceDescription: "",
    resourceContact: "",
    resourceContact2: "",
    resourceLocation: {
      state: "",
      city: "",
    },
    resourceType2: "", // subbranch of resource like refilling or empty cyllinder
    resourceVerified: "", // when last verified
  });
  const [optionResources2, setOptionResources2] = useState([]);
  const optionResources = [
    { value: "oxygen", label: "Oxygen" },
    { value: "beds", label: "Beds" },
    { value: "blood", label: "Blood Plasma" },
    { value: "injection", label: "Remdesivir" },
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
    if (value.value === "blood") {
      setOptionResources2([
        { value: "A+", label: "A+" },
        { value: "A-", label: "A-" },
        { value: "B+", label: "B+" },
        { value: "B-", label: "B-" },
        { value: "O+", label: "O+" },
        { value: "O-", label: "O-" },
        { value: "AB+", label: "AB+" },
        { value: "AB-", label: "AB-" },
      ]);
    } else if (value.value === "oxygen") {
      setOptionResources2([
        { value: "Refilling", label: "Refilling" },
        { value: "Empty Can", label: "Empty Can" },
      ]);
    } else if (value.value === "beds") {
      setOptionResources2([
        { value: "ICU", label: "ICU" },
        { value: "Oxygen Beds", label: "Oxygen Beds" },
        { value: "Ventilator", label: "Ventilator" },
      ]);
    } else {
      setOptionResources2([]);
      setInfo((prevValue) => {
        return {
          ...prevValue,
          resourceType2: "",
        };
      });
    }
    setInfo((prevValue) => {
      return {
        ...prevValue,
        resourceType: value,
      };
    });
  }
  function onResource2ChangeHandler(value) {
    console.log(value);
    setInfo((prevValue) => {
      return {
        ...prevValue,
        resourceType2: value,
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
    console.log(info);
    axios.post("/submit/resource", {
      personSubmitter: info.personSubmitter,
      resourceType: info.resourceType.value, // remdesivir or stuff
      resourceName: info.resourceName,
      resourceDescription: info.resourceDescription,
      resourceContact: info.resourceContact,
      resourceContact2: info.resourceContact2,
      resourceLocation: {
        state: info.resourceLocation.state,
        city: info.resourceLocation.city,
      },
      resourceType2: info.resourceType2.value, // subbranch of resource like refilling or empty cyllinder
      resourceVerified: info.resourceVerified, // when last verified
    });
    setInfo({
      personSubmitter: "",
      resourceType: "", // remdesivir or stuff
      resourceName: "",
      resourceDescription: "",
      resourceContact: "",
      resourceContact2: "",
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
              key={uuidv4()}
              options={optionResources}
              className="my-1 p-1 w-full"
              onChange={onResourceChangeHandler}
              name="resourceType"
              placeholder="Eg: Remdesivir, Oxygen, Plasma"
              id="resourceType"
              value={info.resourceType}
            />
            {optionResources2 && (
              <div>
                <label>Resource Type 2</label>

                <CreatableSelect
                  key={uuidv4()}
                  options={optionResources2}
                  className="my-1 p-1 w-full"
                  onChange={onResource2ChangeHandler}
                  name="resourceType2"
                  placeholder="Eg: A+ blood group or others"
                  id="resourceType2"
                  value={info.resourceType2}
                />
                {/* <Select
                  key={uuidv4()}
                  options={optionResources2}
                  className="my-1 p-1 w-full"
                  onChange={onResource2ChangeHandler}
                  name="resourceType2"
                  placeholder="Eg: A+ blood group or others"
                  id="resourceType2"
                  value={info.resourceType2}
                /> */}
              </div>
            )}
            <label>Resource Location</label>
            <Search
              searchData={setLocation}
              className="my-1 p-1 w-full"
              buttonText="Enter location"
            />
            <label>Resource Contact</label>
            <input
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
            <label>Resource Contact 2</label>
            <input
              className="my-1 p-1 w-full"
              onChange={(event) => {
                onChangeHandler(event);
              }}
              name="resourceContact2"
              placeholder="Eg: 9123284657"
              id="resourceContact2"
              value={info.resourceContact2}
              type="tel"
              pattern="[0-9]{10}"
            />
            <label>Resource Verified last</label>
            <input
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
