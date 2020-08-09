import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import about from "./Images/about-us.png";
import "./Style/about.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "0 auto", padding: 40 }}>
          <Card style={{ width: "250", backgroundColor: "#c6cce2" }}>
            <Card.Body>
              <Row>
                <Col sm={6} lg={6}>
                  <Image
                    src={about}
                    style={{
                      maxWidth: "90%",
                      height: "auto",
                    }}
                  />
                </Col>
                <Col
                  sm={6}
                  lg={6}
                  style={{
                    marginTop: 20,
                  }}
                >
                  <h2>About Me</h2>
                  <br />
                  <p>
                    I am Full stack Web Developer having great skills at Front
                    End <br /> and Back End Development. Either its a portfolio
                    site or
                    <br /> a Management System i can give you best work.
                  </p>
                  <br />
                  <p>
                    <i className="fas fa-calendar mr-4"></i> 03-June-1997
                  </p>
                  <p>
                    <i className="fas fa-phone mr-4"></i> 0333-3066672
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-4"></i>{" "}
                    kafeel9937@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt mr-4"></i> Karachi, Pakistan
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
