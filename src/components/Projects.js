// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import Projects.css

function Projects() {
  return (
    <div className="container mt-5">
      <h2>Projects</h2>
      <div className="project-card">
        <h5>Project 1</h5>
        <p>A description of project 1.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project-card">
        <h5>Project 2</h5>
        <p>A description of project 2.</p>
        <a href="#">View Project</a>
      </div>
    </div>
  );
}

export default Projects;

