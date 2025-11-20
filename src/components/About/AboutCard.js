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
            Just Graduated from <strong><span className="purple">Ha Tinh high school for Gifted (CHT)</span></strong>.
            <br />
            I am a student who is passionate about programming and technology. I am currently learning to code and I am always looking for new opportunities to apply my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Design something
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I talked to myself that if someone more talented than myself studies 5 hours per day, I need to spend at least 10 hours if I hope to catch up with them someday."{" "}
          </p>
          {/* <footer className="blockquote-footer">Nhat Tan Dao</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
