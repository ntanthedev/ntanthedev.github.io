import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          {/* <h3>Copyright © {year} SB</h3> */} // sorry SB, i very thanks to you :((
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ntanthedev"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ntannn.dev"  // Replace with your Facebook URL
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nh%E1%BA%ADt-t%C3%A2n-%C4%91%C3%A0o-3283a42b3/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
