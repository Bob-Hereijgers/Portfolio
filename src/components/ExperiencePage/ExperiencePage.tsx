import React from "react";
import "./experiencepage.css";

const ExperiencePage: React.FC = () => {
  return (
    <div className="experience-page">
      <section className="page-header">
        <h1>Professional Experience & Education</h1>
        <p>My journey in software development</p>
      </section>

      <section className="content-wrapper">
        {/* Work Experience */}
        <div className="section-group">
          <h2 className="section-title">Work Experience</h2>

          <div className="experience-item">
            <div className="timeline-marker"></div>
            <div className="item-content">
              <div className="item-header">
                <h3>Intern - Software Developer</h3>
                <span className="date">2024 - 2025</span>
              </div>
              <p className="company">Mediahuis nv.</p>
              <ul className="achievements">
                <li>Developed a company-wide internal web application to centralize software documentation, enabling employees to catalog tools, APIs, and workflows, improving knowledge sharing and cross-departmental collaboration using Docusaurus.</li>
                <li>Built a proof-of-concept AI/ML evaluation tool in Remix to benchmark large language models (LLMs) for translation accuracy, featuring side-by-side comparisons of source text and machine-translated outputs to identify the most effective LLM for enterprise use.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-marker"></div>
            <div className="item-content">
              <div className="item-header">
                <h3>Job-student</h3>
                <span className="date">Aug. 2024</span>
              </div>
              <p className="company">Concordia</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-marker"></div>
            <div className="item-content">
              <div className="item-header">
                <h3>Job-student</h3>
                <span className="date">April 2024 - Januari 2025</span>
              </div>
              <p className="company">Concordia</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-marker"></div>
            <div className="item-content">
              <div className="item-header">
                <h3>Job-student</h3>
                <span className="date">2023 - 2024</span>
              </div>
              <p className="company">Mourik</p>
            </div>
          </div>
                    </div>

        {/* Education */}
        <div className="section-group">
          <h2 className="section-title">Education</h2>

          <div className="experience-item">
            <div className="timeline-marker"></div>
            <div className="item-content">
              <div className="item-header">
                <h3>Graduate Degree in Programming</h3>
                <span className="date">2019 - 2025</span>
              </div>
              <p className="company">AP Hogeschool</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-marker"></div>
            <div className="item-content">
              <div className="item-header">
                <h3>Mechanische Vormgeving</h3>
                <span className="date">2013 - 2019</span>
              </div>
              <p className="company">Don Bosco Mariaberg</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
