import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGraduationCap,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaCogs, // MATLAB placeholder
  FaRobot, // AI/ML Placeholder
} from "react-icons/fa";
import { SiDjango } from "react-icons/si"; // For Django

import "./Education.css";

function Education() {
  return (
    <Container className="mt-5">
      {/* Education Section */}
      <h2 className="education-heading text-center mb-4" data-aos="fade-up" data-aos-duration="1000">
        Education
      </h2>
      <Row className="gy-4">
        <Col
          md={6}
          sm={12}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="education-info p-3 shadow rounded">
            <FaGraduationCap className="education-icon mb-2" />
            <h5 className="education-title">MCA - Master of Computer Applications</h5>
            <p className="education-detail">Rajiv Gandhi Institute of Technology Kottayam</p>
            <p className="education-duration">
              <strong>Duration:</strong> 2022 - 2024
            </p>
            <p className="education-university">
              <strong>University:</strong> KTU
            </p>
          </div>
        </Col>
        <Col
          md={6}
          sm={12}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="education-info p-3 shadow rounded">
            <FaGraduationCap className="education-icon mb-2" />
            <h5 className="education-title">BCA - Bachelor of Computer Applications</h5>
            <p className="education-detail">St Thomas College Thrissur</p>
            <p className="education-duration">
              <strong>Duration:</strong> 2019 - 2022
            </p>
            <p className="education-university">
              <strong>University:</strong> University of Calicut
            </p>
          </div>
        </Col>
      </Row>

      {/* Skills Section */}
      <h2
        className="skills-heading text-center mt-5 mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Skills
      </h2>
      <Row className="skills-section text-center gy-4">
        <Col xs={6} md={3} data-aos="zoom-in" data-aos-duration="1000">
          <FaJava className="icon" />
          <p>Java</p>
        </Col>
        <Col xs={6} md={3} data-aos="zoom-in" data-aos-duration="1000">
          <FaPython className="icon" />
          <p>Python</p>
        </Col>
        <Col xs={6} md={3} data-aos="zoom-in" data-aos-duration="1000">
          <SiDjango className="icon" />
          <p>Django</p>
        </Col>
        <Col xs={6} md={3} data-aos="zoom-in" data-aos-duration="1000">
          <FaHtml5 className="icon" />
          <p>HTML</p>
        </Col>
        <Col xs={6} md={3} data-aos="zoom-in" data-aos-duration="1000">
          <FaCss3Alt className="icon" />
          <p>CSS</p>
        </Col>
        <Col xs={6} md={3} data-aos="zoom-in" data-aos-duration="1000">
          <FaCogs className="icon" />
          <p>MATLAB</p>
        </Col>
        <Col xs={6} md={3} data-aos="zoom-in" data-aos-duration="1000">
          <FaRobot className="icon" />
          <p>Machine Learning</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
