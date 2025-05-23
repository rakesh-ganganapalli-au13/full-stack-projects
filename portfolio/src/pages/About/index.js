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
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
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
                <br />A cybersecurity enthusiast with hands-on experience
                simulating 3.5+ years in a Security Operations Center (SOC)
                environment. Recently completed Master's in Cybersecurity in the
                UK, I specialize in threat detection, incident analysis, and
                security monitoring using tools like Microsoft Sentinel,
                Defender for Endpoint, Splunk, and CrowdStrike.
                <br />
                With a foundation in Full Stack Web Development (React.js,
                Node.js, MongoDB), I bring a unique blend of development and
                defensive security skills — allowing me to understand attacks
                from both sides.
                <br />
                Driven by curiosity and a strong sense of purpose, I’m
                passionate about detecting threats, investigating alerts, and
                improving security posture through practical SOC workflows and
                frameworks like MITRE ATT&CK, ISO 27001, and NIST.
                <br />
                Every day, I strive to learn something new, understand attacker
                behavior, and apply that knowledge to real-world security
                problems — making me job-ready and impact-driven from day one.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1pqvRdydAQ9_1H8871VMiA4I3vCj-syjo/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>

                  {/* <div>
                    <a
                      href="https://github.com/rakesh-ganganapalli-au13"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div> */}

                  <div>
                    <a
                      href="https://www.linkedin.com/in/rakeshganganapalli/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="mailto:rakeshganganapalli607@gmail.com">
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
