import React from "react";
import "./skillspage.css";

const SkillsPage: React.FC = () => {
  return (
    <div className="skills-page">
      <section className="page-header">
        <h1>Skills & Competencies</h1>
        <p>Technical expertise, languages, and soft skills</p>
      </section>

      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skill-category-card">
          <div className="category-header">
            <span className="category-icon">💻</span>
            <h2 className="category-title">Technical Skills</h2>
          </div>
          <div className="skills-tag-cloud">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">ASP.NET</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML5/CSS3</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Docusaurus</span>
            <span className="skill-tag">Remix</span>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-category-card">
          <div className="category-header">
            <span className="category-icon">🌐</span>
            <h2 className="category-title">Languages</h2>
          </div>
          <div className="languages-list">
            <div className="language-item">
              <div className="language-info">
                <span className="language-name">Dutch</span>
                <span className="language-level">Fluent (Native)</span>
              </div>
              <div className="language-bar">
                <div className="language-progress" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="language-item">
              <div className="language-info">
                <span className="language-name">English</span>
                <span className="language-level">Fluent (Professional)</span>
              </div>
              <div className="language-bar">
                <div className="language-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="language-item">
              <div className="language-info">
                <span className="language-name">French</span>
                <span className="language-level">Basic (Conversational)</span>
              </div>
              <div className="language-bar">
                <div className="language-progress" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skill-category-card">
          <div className="category-header">
            <span className="category-icon">⭐</span>
            <h2 className="category-title">Soft Skills</h2>
          </div>
          <div className="soft-skills-grid">
            <div className="soft-skill-item">
              <span className="soft-skill-icon">🚀</span>
              <span className="soft-skill-name">Fast Learner</span>
            </div>
            <div className="soft-skill-item">
              <span className="soft-skill-icon">💡</span>
              <span className="soft-skill-name">Creative</span>
            </div>
            <div className="soft-skill-item">
              <span className="soft-skill-icon">💪</span>
              <span className="soft-skill-name">Resilient</span>
            </div>
            <div className="soft-skill-item">
              <span className="soft-skill-icon">🤝</span>
              <span className="soft-skill-name">Team Player</span>
            </div>
            <div className="soft-skill-item">
              <span className="soft-skill-icon">🎯</span>
              <span className="soft-skill-name">Problem Solver</span>
            </div>
            <div className="soft-skill-item">
              <span className="soft-skill-icon">📅</span>
              <span className="soft-skill-name">Detail-Oriented</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;