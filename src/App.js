// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

import About from './components/About';
import Education from './components/Education';
import Contacts from './components/Contacts';  // Import the Contact component
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails'; // Import ProjectDetails component

function App() {
  return (
    <div className="App">
      {/* Header with Navigation Links */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto"> {/* This ensures the items are aligned to the right */}
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/education">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main content */}
      <Container style={{ marginTop: '70px' }}> {/* To give space below the fixed navbar */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Route for ProjectDetails */}
          <Route path="/contact" element={<Contacts />} />  {/* Render the Contact page */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
