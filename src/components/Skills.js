import React from 'react';
import './Skills.css'; // Import your styles
import Lottie from 'lottie-react';
import animationData from '../assets/animations/skills-animation.json';

const Skills = () => {
  return (
    <section id="skills" className="container py-5">
      <div className="skills-header">
        {/* Smaller animation next to title */}
        <div className="animated-icon">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <h2 className="skills-title">SKILLS</h2>
      </div>
      <div className="skills-list">
        <div className="skill">
          <h4>HTML & CSS</h4>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h4>PYTHON</h4>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h4>PostgreSQL</h4>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
