import './Project.css';  // Import the Project CSS file
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

function Project() {
  return (
    <div className="project-section">
      <h2 className="text-center mb-5">My Projects</h2>
      <Row className="g-4"> {/* Adding space between columns */}
        <Col sm={12} md={6} lg={4}>
          <Card className="project-card shadow-sm rounded">
            <Card.Body>
              <Card.Title className="project-title">
                <Link to="/projects/1" className="text-decoration-none text-dark">
                  CoachOneSelf
                </Link>
              </Card.Title>
              <Card.Text>
                A personalized self-defense platform designed to teach essential techniques.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="project-card shadow-sm rounded">
            <Card.Body>
              <Card.Title className="project-title">
                <Link to="/projects/2" className="text-decoration-none text-dark">
                  Blood Donation Management System
                </Link>
              </Card.Title>
              <Card.Text>
                A system to manage blood donations and requests efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="project-card shadow-sm rounded">
            <Card.Body>
              <Card.Title className="project-title">
                <Link to="/projects/3" className="text-decoration-none text-dark">
                  Precipitation Prediction
                </Link>
              </Card.Title>
              <Card.Text>
                A machine learning model to predict rainfall based on satellite data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Project;
