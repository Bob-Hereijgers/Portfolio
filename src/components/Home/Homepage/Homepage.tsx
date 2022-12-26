import "../../../App.css";
import CarouselProjects from "../Carousel/Carousel";
import Profile from "../Profile/Profile";
import Games from "../Games/Games";

const HomePage = () => {
  let entry = Math.floor(Math.random() * 389 + 1);
  return (
    <section>
      <div className="grid">
        <CarouselProjects />
        <div className="carouselBackground" />
        <Profile />
        <Games Entry={entry} />
      </div>
    </section>
  );
};

export default HomePage;
