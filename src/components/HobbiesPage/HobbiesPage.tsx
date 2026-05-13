import React from "react";
import "./hobbiespage.css";

const HobbiesPage: React.FC = () => {
  return (
    <div className="hobbies-page">
      {/* Hobby 1 - Xenoblade Chronicles */}
      <section className="hobby-section section-gaming">
        <div className="section-overlay"></div>
        <div className="section-content">
          <div className="hobby-icon">🎮</div>
          <h2 className="hobby-title">Xenoblade Chronicles</h2>
          <div className="hobby-text">
            <p>
              I love games, especially ones that tell interesting stories and have intricate characters. 
              From the opening notes of the title theme to the final lines spoken, this game grabbed my 
              attention and never let go. It talks about the cycle of revenge, standing for what's right 
              even in the face of adversity, that we shape our own destinies, and that the world we 
              inherited from our ancestors is precious and we should leave it better than we found it 
              for our descendants. And this is all from just one game in a series of 4 so far.
            </p>
          </div>
        </div>
      </section>

      {/* Hobby 2 - Fitness & Training */}
      <section className="hobby-section section-fitness">
        <div className="section-content">
          <div className="hobby-icon">🏋️</div>
          <h2 className="hobby-title">Fitness & Training</h2>
          <div className="hobby-text">
            <p>
              Staying active is essential for both physical and mental well-being. I maintain a consistent 
              workout routine that includes strength training, cardio, and calisthenics. Fitness has taught 
              me discipline, consistency, and goal-setting—qualities that translate directly to my professional 
              life. I believe in the philosophy of continuous improvement, whether in the gym or at my desk.
            </p>
          </div>
        </div>
      </section>

      {/* Hobby 3 - Reading & Learning */}
      <section className="hobby-section section-learning">
        <div className="section-content">
          <div className="hobby-icon">📚</div>
          <h2 className="hobby-title">Reading & Learning</h2>
          <div className="hobby-text">
            <p>
              I'm an avid reader with a focus on technology, personal development, and science fiction. 
              I believe in lifelong learning and constantly seek new knowledge through books, online courses, 
              and tech blogs. Currently, I'm exploring topics like artificial intelligence, system design, 
              and leadership. Some of my favorite authors include Yuval Noah Harari, Andy Weir, and Robert C. Martin.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HobbiesPage;