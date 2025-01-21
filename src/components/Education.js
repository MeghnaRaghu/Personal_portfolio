import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Education() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Education</h2>
      <Row>
        <Col md={6} sm={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Master of Computer Applications (MCA)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Rajiv Gandhi Institute of Technology Kottayam</Card.Subtitle>
              <Card.Text>
                <strong>Duration:</strong> 2022 - 2024
              </Card.Text>
              <Card.Text>
                <strong>University:</strong> KTU
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Bachelor of Computer Applications (BCA)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">St Thomas College Thrissur</Card.Subtitle>
              <Card.Text>
                <strong>Duration:</strong> 2019 - 2022
              </Card.Text>
              <Card.Text>
                <strong>University:</strong> University of Calicut
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
