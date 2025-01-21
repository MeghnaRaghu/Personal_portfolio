import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

function ProjectDetails() {
  const { id } = useParams(); // Retrieve the project ID from the URL

  const projectsDetails = {
    1: { name: 'CoachOneSelf', description: 'Detailed explanation of Project 1.' },
    2: { name: 'Blood donation Management System', description: 'Detailed explanation of Project 2.' },
    3: { name: 'Precipitation Predction', description: 'Detailed explanation of Project 3.' },
  };

  const project = projectsDetails[id];

  return (
    <Container style={{ marginTop: '20px' }}>
      {project ? (
        <Card>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button as={Link} to="/projects" variant="secondary">Back to Projects</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Project not found!</p>
      )}
    </Container>
  );
}

export default ProjectDetails;
