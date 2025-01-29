import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import "./Education.css";

function Education() {
  const [educationData, setEducationData] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/education")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) => console.error("Error fetching education data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/skills")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills data:", error));
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="education-heading text-center mb-4" data-aos="fade-up" data-aos-duration="1000">
        Education
      </h2>
      <Row className="gy-4">
        {educationData.map((education) => (
          <Col
            md={6}
            sm={12}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            key={education.id}
          >
            <div className="education-info p-3 shadow rounded">
              <FaIcons.FaGraduationCap className="education-icon mb-2" />
              <h5 className="education-title">{education.degree}</h5>
              <p className="education-detail">{education.institution}</p>
              <p className="education-duration">
                <strong>Duration:</strong> {education.duration}
              </p>
              <p className="education-university">
                <strong>University:</strong> {education.university}
              </p>
            </div>
          </Col>
        ))}
      </Row>

      <h2 className="skills-heading text-center mt-5 mb-4" data-aos="fade-up" data-aos-duration="1000">
        Skills
      </h2>
      <Row className="skills-section text-center gy-4">
        {skills.map((skill) => {
          const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon];
          return (
            <Col xs={6} md={3} key={skill.id} data-aos="zoom-in" data-aos-duration="1000">
              {IconComponent ? <IconComponent className="icon" /> : <div className="icon-placeholder">N/A</div>}
              <p>{skill.name}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Education;
