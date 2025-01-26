import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error('Error fetching project details:', error));
  }, [id]);

  if (!project) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details-container">
      <h1 className="project-details-title">{project.title}</h1>
      <p className="project-details-description">{project.description}</p>
      <div className="project-details-meta">
        <p>
          <strong>Technologies:</strong> {project.technologies}
        </p>
        <p>
          <strong>Duration:</strong> {project.duration}
        </p>
      </div>
      <a href="/projects" className="back-link">
        Back to Projects
      </a>
    </div>
  );
}

export default ProjectDetails;
