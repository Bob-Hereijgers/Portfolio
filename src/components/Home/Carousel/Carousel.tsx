import Carousel from "react-bootstrap/Carousel";
import pikachu from "../../../images/Pikachu.png";
import colors from "../../../images/pexels-pixabay-40799.jpg"
import casino from "../../../images/pexels-darya-sannikova-3021120.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const CarouselProjects = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <div className="carouselDiv">
          <NavLink to="/Exercise/Pokemon">
            <img src={pikachu} alt="Pikachu" className="carouselImage" />
          </NavLink>
        </div>
        <Carousel.Caption>
          <h3>Pokemon Exercise - Labo 5</h3>
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
