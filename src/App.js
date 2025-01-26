// src/App.js
import React, { useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Import components
import About from './components/About';
import Education from './components/Education';
import Contacts from './components/Contacts';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';

function App() {
  // Initialize AOS in useEffect to ensure it's set up after the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Animations play only once
      offset: 50,     // Trigger animations slightly earlier
    });
  }, []);

  return (
    <div className="App">
      {/* Header with Navigation Links */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand as={NavLink} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main content */}
      <Container style={{ marginTop: '70px' }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
