import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <Container>
            <Row>
              {/* <Col sm={4}></Col> */}
              <Col sm={12} style={{ textAlign: "center" }}>
                <a
                  href="#home"
                  style={{
                    fontSize: 25,
                    fontWeight: "bolder",
                    textDecoration: "none",
                  }}
                >
                  imkafeel
                  <strong style={{ color: "red", fontSize: 25 }}>.</strong>
                </a>
              </Col>
              {/* <Col sm={4}></Col> */}
            </Row>
            <Row>
              <Col sm={12}>
                <p style={{ textAlign: "center", fontSize: 15, color: "#fff" }}>
                  Copyrights 2020 imKafeel.
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}
