import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Expertise from "./Expertise";
import Work from "./Work";
import uploadedFileLink from "./kafeel.pdf";
import Footer from "./Footer";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a
          class="navbar-brand"
          href="#home"
          style={{
            fontSize: 25,
            fontWeight: "bolder",
          }}
        >
          imkafeel
          <strong style={{ color: "red", fontSize: 25 }}>.</strong>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" style={{ marginLeft: 100 }}>
            <li class="nav-item active">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li class="nav-item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link"
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li class="nav-item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link"
                activeClass="active"
                to="expertise"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Expertise
              </Link>
            </li>
            <li class="nav-item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link"
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link>
            </li>
          </ul>
          <a
            href={uploadedFileLink}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button className="btn btn-outline-danger ml-5">
              <i className="fas fa-download mr-2" />
              Download CV
            </Button>
          </a>
        </div>
      </nav>
      <Container fluid style={{ backgroundColor: "#343A40" }}>
        <Row>
          <Col lg={12}>
            <div id="home">
              <Home />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div id="about">
              <About />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div id="resume">
              <Resume />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div id="expertise">
              <Expertise />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div id="work">
              <Work />
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "#343A40" }} className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default Header;

if (document.getElementById("home")) {
  ReactDOM.render(<Header />, document.getElementById("home"));
}
