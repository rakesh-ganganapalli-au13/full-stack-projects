import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";

function Contact() {
  return (
    <div>
      <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a
                  href="mailto:rakeshganganapalli607@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline-danger"
                    title="rakeshganganapalli607@gmail.com"
                  >
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
      <hr />
    </div>
  );
}

export default Contact;
