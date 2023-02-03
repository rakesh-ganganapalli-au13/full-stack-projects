import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import L_ReactToDoList from "../../assets/img/projects/ast.png";
import M_ReactToDoList from "../../assets/img/projects/infogain-project.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./styles.css";

function ProjectTimiline() {
  return (
    <div>
      <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
          <Events>
            <ImageEvent
              date=""
              className="text-center"
              text="Insight"
              src={M_ReactToDoList}
              alt="React ToDo App"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Accordion.Toggle
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong>
                          This is website is designed and developed to maintain
                          the delevering parts data of XLParts company and it is
                          integrated with liferay engine and also in it
                          integrated power bi reports as web pages.
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Keeps large data in the form table</li>
                            <li>Keeps the powetbi reports</li>
                            <li>
                              Keeps all infomation about XLparts delivery unit
                            </li>
                          </ul>
                          <hr />
                          <strong>Technologies used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">ReactJS</span>
                            </li>
                            <li>
                              <span className="p-2">JavaScript</span>
                            </li>
                            <li>
                              <span className="p-2">HTML</span>
                            </li>
                            <li>
                              <span className="p-2">
                                CSS,Bootstrap,React-bootstrap
                              </span>
                            </li>
                            <li>
                              <span className="p-2">Liferay</span>
                            </li>
                            <li>
                              <span className="p-2">Clay-ui</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>

                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                      href="https://dev-insight.maah.global/"
                      target="_blank"
                    >
                      SEE LIVE
                    </UrlButton>
                  </div>
                </div>
              </div>
            </ImageEvent>

            <ImageEvent
              date=""
              className="text-center"
              text="Astrology"
              src={L_ReactToDoList}
              alt="React ToDo App"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong>
                          This website will give the heroscope based on user
                          data like date and time of birth and place of birth
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Provides Birth chats report</li>
                            <li>
                              Provides Gem stone and rudraksha predection{" "}
                            </li>
                            <li>Provides Astakavarga caluculation </li>
                          </ul>
                          <hr />
                          <strong>Technologies used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">JavaScript</span>
                            </li>
                            <li>
                              <span className="p-2">ReactJS</span>
                            </li>
                            <li>
                              <span className="p-2">NodeJS</span>
                            </li>
                            <li>
                              <span className="p-2">MongoDB</span>
                            </li>
                            <li>
                              <span className="p-2">HTML</span>
                            </li>
                            <li>
                              <span className="p-2">CSS&Sass</span>
                            </li>
                            <li>
                              <span className="p-2">MaterialUI</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>

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
          </Events>
        </Timeline>
      </div>
      <hr />
    </div>
  );
}

export default ProjectTimiline;
