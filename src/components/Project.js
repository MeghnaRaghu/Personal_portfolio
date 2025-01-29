import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Project.css';

function Project() {
  const [projects, setProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/projectfront')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the project data:', error);
      });

    setIsVisible(true);
  }, []);

  return (
    <div className="project-section">
      <h1 className="text-center mb-5">My Projects</h1>
      <Row className="g-4">
        {projects.map((project) => (
          <Col sm={12} md={6} lg={4} key={project.id}>
            <Link to={`/projects/${project.id}`} className="text-decoration-none">
              <Card className={`project-card shadow-sm rounded ${isVisible ? 'visible' : ''}`}>
                <div className="project-image-container">
                  <Card.Img
                    variant="top"
                    src={project.image ? `data:image/jpeg;base64,${project.image}` : '/fallback-image.jpg'}
                    alt={project.name}
                    className="project-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="project-title text-dark">
                    {project.name}
                  </Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  <Link to={`/projects/${project.id}`} className="view-more-link mt-auto">
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
