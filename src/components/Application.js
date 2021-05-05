// Inbuilt imports
import React from "react";

//External Imports
import { Route, Switch } from "react-router-dom";
import Favicon from "react-favicon";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css"; // styles need to be imported

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Personal imports
import Home from "./Home";
import Ambulance from "./Ambulance";
import Injection from "./Injection";
import Blood from "./Blood";
import Oxygen from "./Oxygen";
import Beds from "./Beds";
import Chat from "./Chat";
import Food from "./Food";
import Testing from "./Testing";
import Medicines from "./Medicines";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import "./stylesheets/Application.css";
import Submit from "./Submit";
import faviconFile from "../assets/favicon.ico";

function Application() {
  return (
    <div>
      <Favicon url={faviconFile} />

      <Navigation />

      <Switch>
        <Route path="/injection" component={Injection} />
        <Route path="/beds" component={Beds} />
        <Route path="/blood" component={Blood} />
        <Route path="/medicines" component={Medicines} />
        <Route path="/oxygen" component={Oxygen} />
        <Route path="/testing" component={Testing} />
        <Route path="/ambulance" component={Ambulance} />
        <Route path="/food" component={Food} />
        <Route path="/chat" component={Chat} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/submit" component={Submit} />
        <Route path="/" component={Home} />

        {/*Rendering the home component on default*/}
      </Switch>
    </div>
  );
}

export default Application;
