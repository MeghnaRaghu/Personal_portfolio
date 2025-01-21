import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';  // Import Row and Col for grid layout
import './About.css';  // Importing external CSS file for additional styles

function About() {
  return (
    <Container style={{ marginTop: '20px', textAlign: 'center' }}>
      <Row>
        <Col md={12}>
          <h2 className="about-heading">About Me</h2>
          <p className="intro-text">
            I'm Meghna Raghu, an Associate Software Engineer at Tarento Technologies with a passion for Artificial Intelligence (AI) and Machine Learning (ML). I hold a Master’s in Computer Applications (MCA) and enjoy using AI and ML to solve real-world challenges.
          </p>
          <p className="detail-text">
            I am eager to explore new technologies and contribute to innovations in intelligent systems and automation. I am constantly learning and excited about the potential of AI to improve lives.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
