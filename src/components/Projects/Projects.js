import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import shorterurl from "../../Assets/Projects/shorterurl.png";
import chtoj from "../../Assets/Projects/chtoj.png";
import neoteam from "../../Assets/Projects/neoteam.png";
import chtcoder from "../../Assets/Projects/chtcoder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects & Curricular Ativities </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chtoj}
              isBlog={false}
              title="CHTOJ"
              description="Chuyen Ha Tinh Online Judge (CHTOJ) is an online judge website developed for students in the province, based on the DMOJ platform. The website was developed by 4 students at Ha Tinh High School for the Gifted (CHT). After nearly four months of operation, the website has attracted over 1,700 users and 115,000 submissions."
              ghLink="https://github.com/CHT-OJ/oj"
              demoLink="https://oj.thptchuyenhatinh.edu.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chtcoder}
              isBlog={true}
              title="CHTCODER"
              description="CHTCODER is the information technology club of Ha Tinh High School for the Gifted, established with the aim of developing the informatics movement in Ha Tinh province. Following the success of CHTOJ, realizing the potential of developing educational technology, I then scale up the CHTOJ team into CHTCODER club with the desire to empower more innovations from my school's students while nurturing young tech talents."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neoteam}
              isBlog={true}
              title="News Team CHT"
              description="News Team is the media club of Ha Tinh High School for the Gifted. This was the first club I joined upon my arrival at CHT. Currently, i'm vice prosident in there. "
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shorterurl}
              isBlog={false}
              title="URL-Shorten-Worker"
              description="A URL shortener use for Cloudflare Workers using javascript. This is a serverless function that takes a long URL and returns a short URL. The short URL redirects to the original long URL. I customize it from crazypeace."
              ghLink="https://github.com/ntanthedev/Url-Shorten-Worker"
              demoLink="https://ntannn.online/shorturl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
