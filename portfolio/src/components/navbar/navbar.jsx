import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './navbar.css'
function MyNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">
                    <img src="https://th.bing.com/th/id/R60830327fa7d49749e046f2fbcb3bc92?rik=omw%2f8EpbZq%2bK3A&riu=http%3a%2f%2fth26.st.depositphotos.com%2f5142301%2f7736%2fv%2f450%2fdepositphotos_77365766-stock-illustration-r-letter-one-line-colorful.jpg&ehk=kxbwR3FwFhH23OYOMzSTVqA1dyrz7gQF6DE2GrlgXnA%3d&risl=&pid=ImgRaw" alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
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
