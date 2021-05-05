import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";

import logo from "../assets/logo.png";
import "./stylesheets/Navigation.css";
function Navigation() {
  return (
    <div className="navbar__custom">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="navbar__name">CovidHelp</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="navbar__links" href="/" to="/">
              Home
            </Nav.Link>

            <Nav.Link href="/beds">Beds</Nav.Link>

            <Nav.Link href="/oxygen">Oxygen</Nav.Link>

            <Nav.Link href="/blood">Blood Plasma</Nav.Link>

            <Nav.Link href="/injection">Remdesivir</Nav.Link>

            <Nav.Link href="/medicines">Medicine</Nav.Link>

            <Nav.Link href="/ambulance">Ambulance</Nav.Link>

            <Nav.Link href="/food">Food</Nav.Link>

            <Nav.Link href="/chat">Chat</Nav.Link>
            {/* <Nav.Link className="navbar__links" href="/blog">
              Blog
            </Nav.Link> */}
            {/* <Link to="/signup">
              { <Button
                href="/signup"
                style={{ margin: '4px' }}
                variant="outline-primary"
              >
                Sign Up
              </Button> }
            </Link> */}
            {/* <Button
              href="/donate"
              style={{ margin: '4px' }}
              variant="outline-warning"
            >
              Donate
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
