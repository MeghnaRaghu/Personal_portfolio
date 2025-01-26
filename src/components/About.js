import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import myPhoto from '../assets/images/myphoto.jpg';

function About() {
  return (
    <Container className="about-container">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="photo-col">
          <img
            src={myPhoto}
            alt="Meghna Raghu"
            className="profile-photo"
            data-aos="zoom-in"
          />
        </Col>
        <Col xs={12} md={8} className="text-col">
          <h1 className="name-heading" data-aos="fade-down">
            Hi! I'm Meghna Raghu
          </h1>
          <h2 className="about-heading" data-aos="fade-up">
            About Me
          </h2>
          <p className="intro-text" data-aos="fade-right" data-aos-delay="200">
            An Associate Software Engineer at Tarento Technologies with a Master's in Computer Applications (MCA). I have a strong foundation in computer applications and a passion for exploring new technologies in Artificial Intelligence (AI) and Machine Learning (ML). I'm always excited to learn and apply AI/ML solutions to real-world challenges.
          </p>
          <p className="detail-text" data-aos="fade-left" data-aos-delay="400">
            I am eager to explore new technologies and contribute to innovations in intelligent systems and automation. I am constantly learning and excited about the potential of AI to improve lives.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
