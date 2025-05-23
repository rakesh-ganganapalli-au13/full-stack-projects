import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./navbar.css";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false); // Collapse the navbar when a link is clicked
  };

  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
        expanded={expanded}
      >
        <Navbar.Brand className="logo" href="#home">
          <p>Rakesh Ganganapalli</p>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle expanded state on button click
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav">
            <Nav.Link
              href="#home"
              className="cursor-pointer"
              onClick={handleNavLinkClick} // Collapse navbar on link click
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="cursor-pointer"
              onClick={handleNavLinkClick} // Collapse navbar on link click
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="cursor-pointer"
              onClick={handleNavLinkClick} // Collapse navbar on link click
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="cursor-pointer"
              onClick={handleNavLinkClick} // Collapse navbar on link click
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="cursor-pointer"
              onClick={handleNavLinkClick} // Collapse navbar on link click
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
