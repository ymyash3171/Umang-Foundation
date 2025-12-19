import React from 'react';
import '../styles/Projects.css';

function BeTheChange() {
  return (
    <section className="be-the-change" id="be-the-change">
      <div className="projects-container">
        <h2>Be The Change</h2>
        <p className="projects-intro">How you can get involved and directly impact a child's future.</p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Sponsor a Child</h3>
            <p>Provide monthly support for education and essentials.</p>
          </div>
          <div className="project-card">
            <h3>Volunteer</h3>
            <p>Spend time teaching or mentoring local students.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeTheChange;
