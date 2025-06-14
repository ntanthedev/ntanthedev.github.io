import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCodeforces,
  SiLeetcode,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeforces />
        <p className="tech-icon-name">Codeforces</p>
        <p className="rating">Expert (1600+)</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode />
        <p className="tech-icon-name">VNOJ</p>
        <p className="rating">Top 50</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
        <p className="tech-icon-name">LeetCode</p>
        <p className="rating">300+ Problems</p>
      </Col>
    </Row>
  );
}

export default Experience;