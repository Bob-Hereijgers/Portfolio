import Pfp from "../../../images/20221102_161117.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";

const Profile = () => {
  const [bars, setBars] = useState(true);

  let bar1 = 60;
  let Skill1 = "React Skill";
  let bar2 = 90;
  let Skill2 = "Problem Solving";
  let bar3 = 45;
  let Skill3 = "C# Skill";
  let bar4 = 75;
  let Skill4 = "Critical Thinking";
  let bar5 = 20;
  let Skill5 = "CSS Skill";
  let bar6 = 80;
  let Skill6 = "Detail Oriented";
  let button = "General Qualities";

  if (bars === false) {
    bar1 = 45;
    Skill1 = "French";
    bar2 = 99;
    Skill2 = "English";
    bar3 = 5;
    Skill3 = "Social Skills";
    bar4 = 50;
    Skill4 = "Punctuallity";
    bar5 = 69;
    Skill5 = "MS Paint skills";
    bar6 = 60;
    Skill6 = "Video Game Skill";
    button = "Programming Qualities";
  }
  return (
    <div className="Profile">
      <h1 className="ProfileTitle">Profile</h1>
      <img className="ProfileImage" src={Pfp} alt="profile " />
      <p id="Skill1" className="Skill">
        {Skill1}:
      </p>
      <ProgressBar animated now={bar1} label={bar1} className="Bar1" />
      <p id="Skill2" className="Skill">
        {Skill2}:
      </p>
      <ProgressBar animated now={bar2} label={bar2} className="Bar2" />
      <p id="Skill3" className="Skill">
        {Skill3}:
      </p>
      <ProgressBar animated now={bar3} label={bar3} className="Bar3" />
      <p id="Skill4" className="Skill">
        {Skill4}:
      </p>
      <ProgressBar animated now={bar4} label={bar4} className="Bar4" />
      <p id="Skill5" className="Skill">
        {Skill5}:
      </p>
      <ProgressBar animated now={bar5} label={bar5} className="Bar5" />
      <p id="Skill6" className="Skill">
        {Skill6}:
      </p>
      <ProgressBar animated now={bar6} label={bar6} className="Bar6" />

      <button
        className="ProfileButton"
        onClick={() => {
          if (bars === true) {
            setBars(false);
          } else setBars(true);
        }}
      >
        {button}
      </button>
      <div className="Description">
        <h2>About me:</h2>
        <p>
          My name is Bob Hereijgers, and I am a student in a programming
          graduate, at the AP Hogeschool in Antwerp. I chose this study path
          because I am interested in developing and designing video games one
          day. But before that I would like to spend my time learning to design
          websites like this one. I still have lots of room to grow and hope to
          work with many great people.
        </p>
      </div>
    </div>
  );
};

export default Profile;
