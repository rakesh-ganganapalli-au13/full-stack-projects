import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./skills-data";

import "./styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">Technical Skills</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around m-auto">
          <Col md={6}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                {/* <Card.Title className="text-center  card-title"></Card.Title> */}
                <Card.Text className="tech-skills">
                  {/* <div className="tech-skills">
                    <div className="tech-skills-skill">skjfi</div>
                    <div className="tech-skills-skill">skjfi</div>
                    <div className="tech-skills-skill">skjfi</div>
                  </div> */}

                  {skills.techSkills.map((skill, index) => (
                    <div className="m-2 tech-skills-skill">
                      <span className="p-2" key={index}>
                        <a
                          className="text-dark text-decoration-none image-style m-1 w-2 p-2"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1 w-2 p-2"
                          ></Image>{" "} */}
                          {skill.skillName}
                        </a>
                      </span>
                    </div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
