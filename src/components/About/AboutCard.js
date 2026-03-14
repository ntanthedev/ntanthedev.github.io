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
            Just Graduated from <strong><span className="purple">Ha Tinh High School for the Gifted (CHT)</span></strong>.
            <br />
            I am a student who is passionate about programming and technology. I am currently learning to code and I am always looking for new opportunities to apply my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving CP problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing something
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If talented people study 5 hours, I must study 10 to catch up."{" "}
          </p>
          {/* <footer className="blockquote-footer">Nhat Tan Dao</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
