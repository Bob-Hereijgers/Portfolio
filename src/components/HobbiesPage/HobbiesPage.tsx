import React from "react";
import "./hobbiespage.css";

const HobbiesPage: React.FC = () => {
  return (
    <div className="hobbies-page">
      <section className="page-header">
        <h1>Hobbies & Interests</h1>
        <p>What I enjoy doing outside of coding</p>
      </section>

      <div className="hobbies-container">
        {/* Hobby 1 */}
        <div className="hobby-card">
          <div className="hobby-icon">🎮</div>
          <h2 className="hobby-title">Gaming</h2>
          <div className="hobby-content">
            <p className="hobby-text">
              I'm passionate about video games, from immersive open-world RPGs to competitive shooters. 
              Gaming has taught me strategic thinking, problem-solving under pressure, and the importance 
              of teamwork. Some of my favorites include The Legend of Zelda series, Elden Ring, and Valorant.
              I also enjoy analyzing game design mechanics and UI/UX elements that make games engaging.
            </p>
          </div>
        </div>

        {/* Hobby 2 */}
        <div className="hobby-card">
          <div className="hobby-icon">🏋️</div>
          <h2 className="hobby-title">Fitness & Training</h2>
          <div className="hobby-content">
            <p className="hobby-text">
              Staying active is essential for both physical and mental well-being. I maintain a consistent 
              workout routine that includes strength training, cardio, and calisthenics. Fitness has taught 
              me discipline, consistency, and goal-setting—qualities that translate directly to my professional 
              life. I believe in the philosophy of continuous improvement, whether in the gym or at my desk.
            </p>
          </div>
        </div>

        {/* Hobby 3 */}
        <div className="hobby-card">
          <div className="hobby-icon">📚</div>
          <h2 className="hobby-title">Reading & Learning</h2>
          <div className="hobby-content">
            <p className="hobby-text">
              I'm an avid reader with a focus on technology, personal development, and science fiction. 
              I believe in lifelong learning and constantly seek new knowledge through books, online courses, 
              and tech blogs. Currently, I'm exploring topics like artificial intelligence, system design, 
              and leadership. Some of my favorite authors include Yuval Noah Harari, Andy Weir, and Robert C. Martin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbiesPage;