import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar className="p-3" bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Twitter Getter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/Search">Search</NavLink>
          <NavLink to="Random">Random</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
