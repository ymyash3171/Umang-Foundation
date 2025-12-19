import React from 'react';
import '../styles/Projects.css';

function StoryOfChange() {
  return (
    <section className="story" id="story-of-change">
      <div className="projects-container">
        <h2>Stories of Change</h2>
        <p className="projects-intro">Real stories from beneficiaries whose lives were transformed by Umang Foundation.</p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Riya's Journey</h3>
            <p>From extra tuition to college admission — a success story of perseverance.</p>
          </div>
          <div className="project-card">
            <h3>Kamal's Health Turnaround</h3>
            <p>Regular health camps helped diagnose and treat a chronic condition early.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryOfChange;
