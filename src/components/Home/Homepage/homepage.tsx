import React from "react";
import "./homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Quinn Hereijgers</h1>
          <p className="hero-subtitle">Software Developer</p>
 {/* Introduction */}
  <div className="bio-section">
    <p className="hero-description">
      Hi! I'm Quinn (legal name Bob). I'm a software developer who fell in love with coding 
      because it combines creativity, logic, and problem-solving. Three things I genuinely enjoy.
    </p>
  </div>

  {/* Background */}
  <div className="bio-section">
    <p className="hero-description">
      I recently graduated with a degree in Programming and completed an internship at 
      Mediahuis nv, where I built internal documentation tools and AI evaluation platforms.
    </p>
  </div>

  {/* Current Project */}
  <div className="bio-section project-highlight">
    <p className="hero-description">
      I'm currently developing a game that blends the economic chaos of (board) games like 
      Monopoly and Mario Party with intricate and strategic turn-based battles inspired by Final Fantasy X 
      and Clair Obscur: Expedition 33. It's a passion project that smashes together my love for weird and unconvential games with complex interconnected systems and strategic depth.
    </p>
  </div>

  {/* Hobbies */}
  <div className="bio-section">
    <p className="hero-description">
      When I'm not coding, you'll find me immersed in all kinds of hobbies, whether it's 
      exploring rich narratives in video games, rolling dice in TTRPG sessions, adding to 
      my growing collection of trinkets, or diving into whatever new interest has caught 
      my attention this week. I love trying new things and always have a few projects on the go.
    </p>
  </div>

  {/* Call to Action */}
  <div className="bio-section">
    <p className="hero-description">
      This site showcases my skills, professional journey, projects, and personal interests. 
      I'm always looking to connect with people who share a passion for technology and continuous growth.
    </p>
  </div>
          <div className="hero-cta">
            <a href="experiences" className="btn btn-secondary">View My Work</a>
            <a href="https://www.linkedin.com/in/bob-hereijgers" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

     {/*  <section className="quick-stats">
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
      </section> --/> */}

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
