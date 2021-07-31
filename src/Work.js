import React, { Component } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import ghostwriting from "./ghostwriting.png";
import cactech from "./cactech.png";
import caclift from "./easymoovit.png";
import jewellodge from "./jewellodge.png";
import mf_collection from "./mf-collection.png";
import logospots from "./logospots.png";
import wiki_pros from "./wiki-pros.png";
import theamericanghostwriters from "./theamericanghostwriters.png";
import cactusleadsbot from "./cactusleadsbot.png";
import "./Style/expertise.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default class Work extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     all: true,
  //     websites: false,
  //     management: false,
  //     ecommerce: false,
  //   };
  // }
  componentDidMount() {
    AOS.init({
      duration: 200,
    });
  }
  render() {
    return (
      <div style={{
        margin: "0 auto",
        paddingTop: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 70,
      }}>
        {" "}
        <Card style={{ width: "250" }}>
          <Card.Body>
            <h4>My Work</h4>

                  <Row>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={ghostwriting} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            GHOSTWRITING FOUNDER <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  php
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Bootstrap 4
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  JavaScript
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  jQuery
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="http://www.ghostwritingfounder.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={cactech} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            CACTECH <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Laravel
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Bootstrap 4
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  JavaScript
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  jQuery
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="http://www.cactech-education.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={jewellodge} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            THE JEWELLODGE <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Wordpress
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  WooCommerce
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Elementor
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Plugins
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="https://www.thejewellodge.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={mf_collection} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            MF-COLLECTION <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Wordpress
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  WooCommerce
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Elementor
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Plugins
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="https://www.mf-collection.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={caclift} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            CACLIFT <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Laravel
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Bootstrap 4
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  JavaScript
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  jQuery
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="https://www.easymooovit.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={logospots} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            LOGOSPOTS <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Laravel
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Bootstrap 4
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  JavaScript
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  jQuery
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="https://www.logospots.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={wiki_pros} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            WIKI PROS <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  php
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Bootstrap 4
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  JavaScript
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  jQuery
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="https://www.wiki-pros.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={theamericanghostwriters} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            AMERICAN GHOSTWRITERS <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  php
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Bootstrap 4
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  JavaScript
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  jQuery
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="https://www.theamericanghostwriters.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={cactusleadsbot} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            CACTUS LEADSBOT <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Laravel
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Bootstrap 4
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  JavaScript
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  jQuery
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="https://www.theamericanghostwriters.com/" >
                                  <button class="button btn btn-danger">
                                    <span>View Project </span>
                                  </button>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
               
          </Card.Body>
        </Card>
      </div>
    );
  }
}
