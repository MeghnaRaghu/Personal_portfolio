import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import './ProjectDetails.css';

function ProjectDetails() {
  const { id } = useParams(); // Retrieve the project ID from the URL
  const [project, setProject] = useState(null); // State to store project data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track error messages

  useEffect(() => {
    // Fetch project details from the backend API
    const fetchProjectDetails = async () => {
      setLoading(true);  // Reset loading state when fetching data
      setError(null);  // Reset error state before each request
      try {
        const response = await fetch(`http://localhost:8080/api/projectfront/${id}`); // Fixed URL path
        if (!response.ok) {
          // If the response is not ok, throw an error
          throw new Error(`Project with ID ${id} not found`);
        }
        const data = await response.json();
        setProject(data); // Set the project data in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message); // Set error message if fetching fails
        setLoading(false); // Set loading to false when there's an error
      }
    };

    fetchProjectDetails(); // Call the function to fetch project data
  }, [id]); // Dependency array ensures effect runs when 'id' changes

  if (loading) {
    return <p>Loading project details...</p>; // Show loading message while fetching data
  }

  if (error) {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Alert variant="danger">{error}</Alert> {/* Show error message */}
        <Button as={Link} to="/projects" variant="secondary">Back to Projects</Button>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      {project ? (
        <Card>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>

            {/* Render additional project details */}
            <Card.Text>
              <strong>Technologies:</strong> {project.technologies}
            </Card.Text>
            <Card.Text>
              <strong>Duration:</strong> {project.duration}
            </Card.Text>
            <Card.Text>
              <strong>Details:</strong> {project.details}
            </Card.Text>

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
