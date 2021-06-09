import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";

import './styles.css'

function ProjectTimiline() {
    return (
        <div>
            <div id="projects">
                <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
                <Timeline>
                    <Events>
                        <ImageEvent
                            date="01/10/2020"
                            className="text-center"
                            text="React ToDo App"
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
                                                    <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                    <li>Keeps track of your Todos</li>
                                                    <li>Powered by React and Material UI</li>
                                                    <li>Respoisive Design</li>
                                                    </ul>
                                                    <hr />

                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_HTML5}
                                                            alt="HTML 5"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_NODE_JS}
                                                            alt="HTML 5"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>
                                                        React
                                                        </span>
                                                    </li>
                                                    </ul>

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <UrlButton
                                        href=""
                                        target="_blank"
                                        >
                                            SEE LIVE
                                        </UrlButton>
                                    </div>
                                </div>
                            </div>
                        </ImageEvent>




                        <ImageEvent
                            date="01/10/2020"
                            className="text-center"
                            text="React ToDo App"
                            src={L_ReactToDoList}
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
                                                    <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                    <li>Keeps track of your Todos</li>
                                                    <li>Powered by React and Material UI</li>
                                                    <li>Respoisive Design</li>
                                                    </ul>
                                                    <hr />

                                                    <strong>Tech used:</strong>
                                                    <ul>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_HTML5}
                                                            alt="HTML 5"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_REACT}
                                                            alt="HTML 5"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>
                                                    </ul>

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <UrlButton
                                        href=""
                                        target="_blank"
                                        >
                                            SEE LIVE
                                        </UrlButton>
                                    </div>
                                </div>
                            </div>
                        </ImageEvent>



                    </Events>
                </Timeline>
            </div>
            <hr/>
        </div>
       

    )
}

export default ProjectTimiline
