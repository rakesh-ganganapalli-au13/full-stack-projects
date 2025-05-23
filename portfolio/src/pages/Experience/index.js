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
        <p className="company">Likedin Services Pvt. Ltd</p>

        <Timeline>
          <Events>
            <ImageEvent
              date="07/02/2020 - 07/08/2020"
              className="text-center"
              text="Trainee SOC Analyst"
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
                          Supported SOC analysts in monitoring alerts via
                          Microsoft Sentinel, tagging events for severity and
                          follow-up.
                        </li>
                        <li>
                          Performed basic triage of low-risk security events,
                          including failed login attempts, port scans, and DNS
                          anomalies.
                        </li>
                        <li>
                          Assisted with log collection, correlation, and initial
                          investigation steps using Splunk and Azure Log
                          Analytics.
                        </li>
                        <li>
                          Practiced identifying IOCs and analysing MITRE ATT&CK
                          techniques under supervision.
                        </li>
                        <li>
                          Documented step-by-step incident findings in shared
                          runbooks and contributed to RCA drafts.
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
              date="07/08/2020-08/08/2023"
              className="text-center"
              text="Cyber Security Analyst"
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
                              Actively monitored security alerts using Microsoft
                              Sentinel and Splunk, detecting potential threats
                              and providing first- line response for security
                              incidents within a Security Operations Center
                              (SOC) and improved response time to P1/P2
                              incidents by 30%.
                            </li>
                            <li>
                              Triaged 20–30 daily alerts using Microsoft
                              Sentinel, escalating threats and minimizing false
                              positives.
                            </li>
                            <li>
                              Conducted initial triage of security incidents,
                              leveraging CrowdStrike and Microsoft Defender to
                              perform detailed analysis of alerts and escalate
                              to senior teams for further investigation.
                            </li>
                            <li>
                              Supported the implementation of security controls
                              across IT infrastructure using Zscaler, Microsoft
                              Defender to ensure compliance with industry
                              regulations such as NIST, ISO 27001, and SOC 2.
                            </li>
                            <li>
                              Assisted in creating regular security posture
                              reports for senior leadership using dashboards
                              from Microsoft Sentinel, Splunk, and AlertLogic,
                              providing insights on compliance status, incident
                              trends, and recommendations for improvements.
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
