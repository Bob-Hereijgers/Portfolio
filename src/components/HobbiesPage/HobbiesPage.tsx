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

      {/* Hobby 2 - Pathfinder 2e */}
      <section className="hobby-section section-pathfinder">
        <div className="section-overlay-pathfinder"></div>
        <div className="section-content">
          <div className="hobby-icon">📜✒️</div>
          <h2 className="hobby-title">Pathfinder 2e</h2>
          <div className="hobby-text">
            <p>
              I deeply enjoy acting and roleplaying different characters with my friends, exploring aspects 
              of myself I'd never thought about before. I also love the intricate combat scenarios that 
              require careful planning, teamwork, and communication.
            </p>
            <p>
              I prefer Pathfinder 2e over the more common Dungeons &amp; Dragons because of the additional 
              options and rules. It makes it a more rules-heavy system in exchange for more freedom in 
              between said rules. It also clears up confusion when conflicts arise since most situations 
              have clear guidelines to follow.
            </p>
          </div>
        </div>
      </section>

      {/* Hobby 3 - Collecting Trinkets */}
      <section className="hobby-section section-collecting">
        <div className="section-overlay-collecting"></div>
        <div className="section-content">
          <div className="hobby-icon">✨🗿</div>
          <h2 className="hobby-title">Collecting Trinkets</h2>
          <div className="hobby-text">
            <p>
              I love collecting weird little things, especially ones with emotional value. 
              Most of my trinkets come from games, movies, and shows—little pieces of 
              fictional worlds that I can hold in my hands.
            </p>
            <p>
              My collection also includes various books and board games, each one representing 
              a story I've loved, an adventure I've shared with friends, or a world I never 
              wanted to leave. Every item on my shelf has a memory attached to it.
            </p>
            <p>
              Monetary value doesn't matter but the joy of finding something that 
              resonates with you and keeping it close can't be matched. A small reminder of the things that 
              make you happy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HobbiesPage;