import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import main from "./Images/main.jpg";
import "./Style/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default class Home extends Component {
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
          <Card style={{ width: "250" }}>
            <Card.Body>
              <Row>
                <Col
                  className="responsive"
                  sm={6}
                  lg={6}
                  style={{
                    marginTop: 150,
                  }}
                >
                  <h1 data-aos="fade-down">Hello</h1>
                  <h4 data-aos="fade-right">I AM MUHAMMAD KAFEEL</h4>
                  <p data-aos="fade-right">Full Stack Web Developer</p>
                  <div className="social-icons" data-aos="zoom-in">
                    <a href="https://github.com/kafeelkhatri">
                      <i class="fab fa-github" style={{ color: "black" }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kafeel-khatri-bb0663102">
                      <i
                        class="fab fa-linkedin"
                        style={{ color: "#0077B5" }}
                      ></i>
                    </a>
                    <a href="https://www.facebook.com/mk.khatri.77">
                      <i
                        class="fab fa-facebook"
                        style={{ color: "#0675E7" }}
                      ></i>
                    </a>
                  </div>
                </Col>
                <Col sm={6} lg={6}>
                  <Image src={main} fluid thumbnail data-aos="fade-in" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
