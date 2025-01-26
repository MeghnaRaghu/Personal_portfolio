import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contacts.css';

function Contact() {
  return (
    <div className="contact-container">
      <h3 className="contact-header">Get in Touch</h3>
      <div className="contact-details">
        <Card className="contact-card">
          <Card.Body>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <Card.Text>
              <strong>Email:</strong> meghnathayyur@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="contact-card">
          <Card.Body>
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <Card.Text>
              <strong>Phone:</strong> +91 9400842052
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="contact-card">
          <Card.Body>
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <Card.Text>
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/meghna-raghu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My LinkedIn Profile
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="contact-card">
          <Card.Body>
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <Card.Text>
              <strong>GitHub:</strong>
              <a
                href="https://github.com/MeghnaRaghu"
                target="_blank"
                rel="noopener noreferrer"
              >
                My GitHub
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Button
        variant="primary"
        href="mailto:meghnathayyur@gmail.com"
        className="contact-button"
      >
        Send an Email
      </Button>
    </div>
  );
}

export default Contact;
