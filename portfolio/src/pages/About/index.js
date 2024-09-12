import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./";
import Profile from "../../assets/img/profile/me2.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included

import "./style.css";
const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src="https://st4.depositphotos.com/1643295/30799/i/450/depositphotos_307997018-stock-photo-smart-teenage-boy-glasses-checking.jpg"
                  thumbnail
                  fluid
                />
              </Row>
            </Col>

            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Rakesh Ganganapalli</strong>
                <br />A passionate programmer, born and brought up in India. I
                am a Full Stack Web Developer with React.js, Redux, Express.js,
                Node.js, and MongoDB as my tech stack.
                <br />
                Currently persuing Masters in Computer Science with
                specialization in 'Cyber Security'.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />
                I love learning about new technologies, what problems are they
                solving and How can I use them to build better and scalable
                products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1CGy5Mfjoca_NOJHVufijpgWaOBV9jJko/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://github.com/rakesh-ganganapalli-au13"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.linkedin.com/in/rakesh-ganganapalli-44b12b240/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="mailto:rakeshganganapalli7@gmail.com">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
