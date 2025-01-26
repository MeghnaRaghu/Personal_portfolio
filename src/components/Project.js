import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css'; // Include a CSS file for additional styling

function Project() {
  const [isVisible, setIsVisible] = useState(false);

  // Project data with images
  const projects = [
    {
      id: 1,
      name: "CoachOneSelf",
      description: "A personalized self-defense platform designed to teach essential techniques.",
      image: require('../assets/images/coachoneself.jpg'), // Replace with actual path
    },
    {
      id: 2,
      name: "Blood Donation Management System",
      description: "A system to manage blood donations and requests efficiently.",
      image: require('../assets/images/blooddonationsystem.jpg'), // Replace with actual path
    },
    {
      id: 3,
      name: "Precipitation Prediction",
      description: "A machine learning model to predict rainfall based on satellite data.",
      image: require('../assets/images/precipitationpediction.jpg'), // Replace with actual path
    },
  ];

  // Use useEffect to trigger animation after the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="project-section">
      <h1 className="text-center mb-5">My Projects</h1>
      <Row className="g-4">
        {projects.map((project) => (
          <Col sm={12} md={6} lg={4} key={project.id}>
            {/* Wrap the entire card with Link */}
            <Link to={`/projects/${project.id}`} className="text-decoration-none">
              <Card
                className={`project-card shadow-sm rounded ${isVisible ? 'visible' : ''}`}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <Card.Body>
                  <Card.Title className="project-title text-dark">
                    {project.name}
                  </Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  <Link to={`/projects/${project.id}`} className="view-more-link">
                    View More
                  </Link>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Project; 