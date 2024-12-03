import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <strong><span className="purple">Đào Nhật Tân </span></strong>
            from <span className="purple"> Ha Tinh, Viet Nam.</span>
            <br />
            I am student in <strong><span className="purple">Ha Tinh high school for Gifted student (CHT)</span></strong>.
            <br />
            nah
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Take a photo
            </li>
            <li className="about-activity">
              <ImPointRight /> Design something
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Cong Luu"{" "}
          </p>
          <footer className="blockquote-footer">ngo teo quang?</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
