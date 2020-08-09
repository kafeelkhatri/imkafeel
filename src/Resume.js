import React, { Component } from "react";
import { Card, Tab, Row, Col, Nav } from "react-bootstrap";
import "./Style/resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            margin: "0 auto",
            padding: 40,
          }}
        >
          <Card style={{ width: "250", backgroundColor: "#c6cce2" }}>
            <Card.Body>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="education"
              >
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item className="mynav-item">
                        <Nav.Link eventKey="education">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="mynav-item">
                        <Nav.Link eventKey="experience">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="mynav-item">
                        <Nav.Link eventKey="skills">Skills</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="mynav-item">
                        <Nav.Link eventKey="certification">
                          Certification
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="education">
                        <h1 className="headings">Education</h1>
                        <br />
                        <h4>
                          <i class="fas fa-school mr-4"></i> 2013
                        </h4>
                        <p className="description">
                          Matriculation from sindh board karachi.
                        </p>
                        <p className="description">
                          Citizens Public Secondary School
                        </p>
                        <hr />
                        <h4>
                          <i class="fas fa-university mr-4"></i> 2013-2015
                        </h4>
                        <p className="description">
                          Intermediate from sindh board karachi.
                        </p>
                        <p className="description">
                          DJ Sindh Government Science College
                        </p>
                        <hr />
                        <h4>
                          <i class="fas fa-graduation-cap mr-4"></i> 2016-2019
                        </h4>
                        <p className="description">
                          Bachelors in Information Technology
                        </p>
                        <p className="description">
                          Bahria University Karachi Campus{" "}
                        </p>
                        <hr />
                      </Tab.Pane>
                      <Tab.Pane eventKey="experience">
                        <h1 className="headings">Education</h1>
                      </Tab.Pane>
                      <Tab.Pane eventKey="skills">
                        <h1 className="headings">Education</h1>
                      </Tab.Pane>
                      <Tab.Pane eventKey="certification">
                        <h1 className="headings">Education</h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
