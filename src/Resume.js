import React, { Component } from "react";
import { Card, Tab, Row, Col, Nav,Image } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./Style/resume.css";
import jquery from "./jquery.png";

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
          <Card style={{ width: "250"}}>
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
                      <h1 className="headings">Experience</h1>
                        <br />
                        <h4>
                        <i class="fas fa-code mr-4"></i> Feb 2019 - April 2019
                        </h4>
                        <p className="description">
                         UI/UX Developer (Internee)
                        </p>
                        <p className="description">
                          Infusion Creative Agency
                        </p>
                        <hr />
                        <h4>
                        <i class="fab fa-connectdevelop mr-4"></i> June 2019 - current
                        </h4>
                        <p className="description">
                          Full Stack Web Developer
                        </p>
                        <p className="description">
                          Cactus
                        </p>
                        <hr />
                    
                      </Tab.Pane>
                      <Tab.Pane eventKey="skills">
                        <h1 className="headings">Skills</h1>
                        <Row>
                          <Col sm={6}>
                          <p><i class="fab fa-html5 mr-3 fa-2x "></i>HTML-90%</p>  
                          <ProgressBar  now={90} />
                          </Col>
                          <Col sm={6}>
                          <p><i class="fab fa-css3 mr-3 fa-2x"></i>CSS-80%</p>
                          <ProgressBar  now={80} />
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col sm={6}>
                          <p><Image src={jquery} style={{ width:30 ,marginRight:"3px" }}></Image>jQuery-70%</p>  
                          <ProgressBar now={70} />
                          </Col>
                          <Col sm={6}>
                          <p><i class="fab fa-js fa-2x mr-3"></i>Javascript-70%</p>
                          <ProgressBar now={70} />
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col sm={6}>
                          <p><i class="fab fa-php fa-2x mr-3"></i>PHP-70%</p>  
                          <ProgressBar now={70} />
                          </Col>
                          <Col sm={6}>
                          <p><i class="fab fa-wordpress fa-2x mr-3"></i>Wordpress-80%</p>  
                          <ProgressBar now={80} />
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col sm={6}>
                          <p><i class="fab fa-laravel fa-2x mr-3"></i>Laravel-70%</p>  
                          <ProgressBar now={70} />
                          </Col>
                          <Col sm={6}>
                          <p><i class="fab fa-react fa-2x mr-3"></i>ReactJs-60%</p>  
                          <ProgressBar now={80} />
                          </Col>
                        </Row>
                         
                       
                      </Tab.Pane>
                      <Tab.Pane eventKey="certification">
                        <h1 className="headings">Certification</h1>
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
