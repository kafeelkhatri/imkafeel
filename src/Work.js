import React, { Component } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import cactus from "./dcactus.png";
import cactech from "./cactech.png";
import caclift from "./caclift.png";
import jewellodge from "./jewellodge.png";
import "./Style/expertise.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      websites: false,
      management: false,
      ecommerce: false,
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 200,
    });
  }
  render() {
    return (
      <div>
        {" "}
        <Card style={{ width: "250" }}>
          <Card.Body>
            <h4>My Work</h4>
            <Row
              style={{
                display: "grid",
                justifyContent: "center",
              }}
            >
              <Col sm={12}>
                <Button
                  variant="outline-danger pr-3 pl-3"
                  className="mr-2"
                  onClick={() => {
                    this.setState({
                      all: true,
                      websites: false,
                      management: false,
                      ecommerce: false,
                    });
                  }}
                >
                  All
                </Button>
                <Button
                  variant="outline-danger pr-3 pl-3"
                  className="mr-2"
                  onClick={() => {
                    this.setState({
                      all: false,
                      websites: true,
                      management: false,
                      ecommerce: false,
                    });
                  }}
                >
                  Websites
                </Button>
                <Button
                  variant="outline-danger pr-3 pl-3"
                  className="mr-2"
                  onClick={() => {
                    this.setState({
                      all: false,
                      websites: false,
                      management: false,
                      ecommerce: true,
                    });
                  }}
                >
                  Ecommerce
                </Button>
                <Button
                  variant="outline-danger pr-3 pl-3"
                  className="mr-2"
                  onClick={() => {
                    this.setState({
                      all: false,
                      websites: false,
                      management: true,
                      ecommerce: false,
                    });
                  }}
                >
                  Mangement Systems
                </Button>
              </Col>
            </Row>
            <div style={{ marginTop: "10px" }}>
              {this.state.all ? (
                <div>
                  <Row>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={cactus} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            CACTUS <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Wordpress
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  plugins
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Elementor
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="http://dcactus.com/">
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
                                <a href="http://cactech-education.com/">
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
                                <a href="https://thejewellodge.com/">
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
                  <Row>
                    <Col sm={6} lg={6} className="mycolumn" data-aos="zoom-in">
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
                                <a href="https://thejewellodge.com/">
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
                    <Col sm={6} lg={6} className="mycolumn" data-aos="zoom-in">
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
                                <a href="https://caclift.com/">
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
                </div>
              ) : null}
            </div>
            <div style={{ marginTop: "10px" }}>
              {this.state.websites ? (
                <div>
                  <Row>
                    <Col sm={6} lg={4} className="mycolumn" data-aos="zoom-in">
                      <div className="containers">
                        <img src={cactus} alt="Avatar" className="image" />
                        <div className="overlay">
                          <div className="text">
                            CACTUS <br />
                            <Row>
                              <Col sm={12}>
                                <Badge pill variant="danger">
                                  Wordpress
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  plugins
                                </Badge>{" "}
                                <Badge pill variant="danger">
                                  Elementor
                                </Badge>{" "}
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "25px" }}>
                              <Col sm={12}>
                                <a href="http://dcactus.com/">
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
                                <a href="http://cactech-education.com/">
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
                                <a href="https://thejewellodge.com/">
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
                  <Row>
                    <Col sm={6} lg={6} className="mycolumn" data-aos="zoom-in">
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
                                <a href="https://thejewellodge.com/">
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
                    <Col sm={6} lg={6} className="mycolumn" data-aos="zoom-in">
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
                                <a href="https://caclift.com/">
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
                </div>
              ) : null}
            </div>
            <div style={{ marginTop: "10px" }}>
              {this.state.ecommerce ? (
                <div>
                  <Row>
                    <Col sm={6} lg={6} className="mycolumn" data-aos="zoom-in">
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
                                <a href="https://thejewellodge.com/">
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
                </div>
              ) : null}
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
