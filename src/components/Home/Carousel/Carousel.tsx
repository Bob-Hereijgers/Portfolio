import Carousel from "react-bootstrap/Carousel";
import Cat from "../../../images/archives_incomplete.png";
import colors from "../../../images/pexels-pixabay-40799.jpg"
import casino from "../../../images/pexels-darya-sannikova-3021120.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const CarouselProjects = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <div className="carouselDiv">
          <NavLink to="/Exercise/Numbers">
            <img src={Cat} alt="First slide" className="carouselImage" />
          </NavLink>
        </div>
        <Carousel.Caption>
          <h3>First exercise</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselDiv">
          <NavLink to="Exercise/Colors">
            <img src={colors} alt="Lots of colors" className="carouselImage" />
          </NavLink>
        </div>
        <Carousel.Caption>
          <h3>Colors Exercise - Labo 4</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselDiv">
          <NavLink to="/Exercise/SlotMachine">
            <img src={casino} alt="Slot Machines" className="carouselImage" />
          </NavLink>
        </div>
        <Carousel.Caption>
          <h3 id="casinoImage">Stateful Slot Machine - Labo 4</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselProjects;
