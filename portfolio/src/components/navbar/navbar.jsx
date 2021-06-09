import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './navbar.css'
function MyNavbar() {
    return (
        <>
             <Navbar
                fixed="top"
                variant="dark"
                expand="md"
                className="animate-navbar nav-theme justify-content-between"
            >
              
                    <Navbar.Brand  className="logo" href="#home">
                        <p>Rakesh Ganganapalli</p>
                    </Navbar.Brand>

                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto nav">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar
