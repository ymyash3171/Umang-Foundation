import React from 'react';
import '../styles/Projects.css';

function Internship() {
  return (
    <section className="internship" id="internship">
      <div className="projects-container">
        <h2>Internship Opportunities</h2>
        <p className="projects-intro">Join our internships to gain hands-on experience in social work, education and project management.</p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Program Intern</h3>
            <p>Work directly with program managers to support field operations.</p>
          </div>
          <div className="project-card">
            <h3>Communications Intern</h3>
            <p>Help us document stories and manage our social media presence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internship;
