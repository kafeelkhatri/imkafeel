import React, { Component } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";

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
            <Card.Body></Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
