import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import M_ReactToDoList from "../../assets/img/projects/infogain-project.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./style.css";

function Experience() {
  return (
    <div>
      <hr />
      <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
        <Timeline>
          <Events>
            <ImageEvent
              date="07/02/2022 - 02/01/2023"
              className="text-center"
              text="Infogain India Pvt.Ltd"
              src={" "}
              //   alt="React ToDo App"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  {/* <Accordion> */}
                  <Card>
                    {/* <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle> */}

                    {/* <Accordion.Collapse eventKey="0" className="text-left"> */}
                    <Card.Body>
                      <ul className="list-styles pt-1">
                        <li>
                          Developed user interfaces with modern JavaScript
                          frameworks
                        </li>
                        <li>
                          Built mock designs and wireframes for landing pages
                          for new project
                        </li>
                        <li>
                          Created accessible , responsive and functional user
                          interfaces to allow visitors on any device to have the
                          same perfect user experience
                        </li>
                        <li>
                          Created user experience that fetched ,parsed, and
                          formatted analytic data , and relayed it into React
                          components.
                        </li>
                      </ul>
                      <hr />
                    </Card.Body>
                    {/* </Accordion.Collapse> */}
                  </Card>
                  {/* </Accordion> */}

                  {/* <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <UrlButton
                                        href=""
                                        target="_blank"
                                        >
                                            SEE LIVE
                                        </UrlButton>
                                    </div> */}
                </div>
              </div>
            </ImageEvent>

            <ImageEvent
              date="24/12/2020-24/01/2022"
              className="text-center"
              text="Allit Technologies India Pvt.Ltd"
              src={" "}
              //   alt="React ToDo App"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion defaultActiveKey="0">
                    <Card>
                      {/* <Accordion.Toggle
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle> */}

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <hr />
                          <ul className="list-styles pt-1">
                            <li>
                              Developed user interfaces with modern JavaScript
                              frameworks
                            </li>
                            <li>
                              Developed object oriented code in NodeJS with 100%
                              accordance to industrial and company standards
                            </li>
                            <li>
                              Learned and implemented multiple threading ,
                              concurrency, design patterns and their impacts on
                              application concurrency
                            </li>
                            <li>
                              Designed and developed web applications using
                              JavaScript frameworks ReactJS, NodeJs
                            </li>
                          </ul>
                          <hr />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </ImageEvent>
          </Events>
        </Timeline>
      </div>
      <hr />
    </div>
  );
}

export default Experience;
