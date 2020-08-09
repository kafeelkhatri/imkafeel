import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import wordpress from "./Images/wordpress.png";
import ux from "./Images/ux.png";
import website from "./Images/website-design.png";
import code from "./Images/code.png";
import "./Style/expertise.css";

export default class Expertise extends Component {
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
            <Col sm={6} lg={3}>
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px rgb(198,204,226)",
                }}
                className="text-center mycard"
              >
                <Card.Img
                  variant="top"
                  src={wordpress}
                  style={{ width: 70, margin: "20px auto" }}
                />
                <Card.Body>
                  <h1>Wordpress Development</h1>
                  <p>
                    Portfolio and ECommerce Websites on Wordpress with great
                    user interface and design, SEO implementation and security
                    measures.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px rgb(198,204,226)",
                }}
                className="text-center mycard"
              >
                <Card.Img
                  variant="top"
                  src={ux}
                  style={{ width: 70, margin: "20px auto" }}
                />
                <Card.Body>
                  <h1>UI/UX Development</h1>
                  <p>
                    When it comes to wireframing and UI/UX design then you are
                    at right place. I can provide you responsive designs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px rgb(198,204,226)",
                }}
                className="text-center mycard"
              >
                <Card.Img
                  variant="top"
                  src={website}
                  style={{ width: 70, margin: "20px auto" }}
                />
                <Card.Body>
                  <h1>Website Development</h1>
                  <p>
                    I can develop complex websites and portfolio sites for you
                    using core php and also on laravel framework.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card
                style={{
                  width: "50",
                  boxShadow: "5px 5px 10px rgb(198,204,226)",
                }}
                className="text-center mycard"
              >
                <Card.Img
                  variant="top"
                  src={code}
                  style={{ width: 70, margin: "20px auto" }}
                />
                <Card.Body>
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
      </div>
    );
  }
}
