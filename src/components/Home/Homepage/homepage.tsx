import React from "react";
import "./homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bob Hereijgers</h1>
          <p className="hero-subtitle">Software Developer</p>
          <p className="hero-description">
            A motivated and detail-oriented recent graduate with a degree in Programming. 
            I specialize in front-end development and am eager to contribute to innovative projects 
            with my strong work ethic, problem-solving skills, and passion for clean code.
          </p>
          <div className="hero-cta">
            <a href="experiences" className="btn btn-secondary">View My Work</a>
            <a href="https://www.linkedin.com/in/bob-hereijgers" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <section className="quick-stats">
        <div className="stat-card">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>5+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>3</h3>
          <p>Languages</p>
        </div>
      </section>

      <section className="highlights">
        <h2>Key Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <h3>Recent Internship</h3>
            <p>Developed internal web applications at Mediahuis nv. focusing on documentation and AI/ML evaluation tools.</p>
          </div>
          <div className="highlight-item">
            <h3>Full Stack Capabilities</h3>
            <p>Proficient in modern web technologies including React, Next.js, ASP.NET, and SQL databases.</p>
          </div>
          <div className="highlight-item">
            <h3>Problem Solver</h3>
            <p>Quick learner with excellent problem-solving skills and attention to detail in development projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
