import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import wordpress from "./Images/wordpress.png";
import ux from "./Images/ux.png";
import website from "./Images/website-design.png";
import code from "./Images/code.png";
import "./Style/expertise.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Work from "./Work";

export default class Expertise extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            margin: "0 auto",
            padding: 40,
          }}
        >
          <Row>
            <Col sm={6} lg={3} id="f1_container">
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px black",
                }}
                className="text-center mycard shadow"
                id="f1_card"
              >
                <Card.Img
                  className="front face"
                  variant="top"
                  src={wordpress}
                  style={{
                    marginTop: "50px",
                    marginLeft: "100px",
                    maxWidth: "150px",
                  }}
                />
                <Card.Body className="back face center">
                  <h1>Wordpress Development</h1>
                  <hr />
                  <p>
                    Portfolio and ECommerce Websites on Wordpress with great
                    user interface and design, SEO implementation and security
                    measures.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3} id="f1_container">
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px black",
                }}
                className="text-center mycard shadow"
                id="f1_card"
              >
                <Card.Img
                  className="front face"
                  variant="top"
                  src={ux}
                  style={{
                    marginTop: "50px",
                    marginLeft: "100px",
                    maxWidth: "150px",
                  }}
                />
                <Card.Body className="back face center">
                  <h1>UI/UX Development</h1>
                  <hr />
                  <p>
                    When it comes to wireframing and UI/UX design then you are
                    at right place. I can provide you responsive designs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3} id="f1_container">
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px black",
                }}
                className="text-center mycard shadow"
                id="f1_card"
              >
                <Card.Img
                  className="front face"
                  variant="top"
                  src={website}
                  style={{
                    marginTop: "50px",
                    marginLeft: "100px",
                    maxWidth: "150px",
                  }}
                />
                <Card.Body className="back face center">
                  <h1>Website Development</h1>
                  <hr />
                  <p>
                    I can develop complex websites and portfolio sites for you
                    using core php and also on laravel framework.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3} id="f1_container">
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px black",
                }}
                className="text-center mycard shadow"
                id="f1_card"
              >
                <Card.Img
                  className="front face"
                  variant="top"
                  src={code}
                  style={{
                    marginTop: "50px",
                    marginLeft: "100px",
                    maxWidth: "150px",
                  }}
                />
                <Card.Body className="back face center">
                  <h1>Mangement Systems</h1>
                  <hr />
                  <p>
                    If you want a complete management system that can automate
                    your organization work then you are at right place.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div
          style={{
            margin: "0 auto",
            padding: 40,
          }}
        >
          <Work />
        </div>
      </div>
    );
  }
}
