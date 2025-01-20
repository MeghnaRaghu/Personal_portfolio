import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with Navigation Links */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>

        {/* Main content */}
        <Container>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Project} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
