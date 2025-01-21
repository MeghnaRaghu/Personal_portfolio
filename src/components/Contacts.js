// Contacts.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Contacts.css';  // Import the CSS file

function Contact() {
  return (
    <div>
      <h3>Get in touch</h3>
      <Card className="contact-card mb-4">
        <Card.Body>
          
          <Card.Text>
            Feel free to reach out to me via email, phone, or through my social media profiles.
          </Card.Text>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><strong>Email  :  </strong> meghnathayyur@gmail.com</li>
            <li><strong>Phone  :  </strong> +91 9876543210</li>
            <li>
              <strong>LinkedIn  :  </strong>
              <a href="https://www.linkedin.com/in/meghna-raghu/" target="_blank" rel="noopener noreferrer">
                My LinkedIn Profile
              </a>
            </li>
            <li>
              <strong>GitHub  :  </strong>
              <a href="https://github.com/MeghnaRaghu" target="_blank" rel="noopener noreferrer">
                My GitHub
              </a>
            </li>
          </ul>
          <Button variant="primary" href="mailto:meghnathayyur@gmail.com">Send an Email</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
