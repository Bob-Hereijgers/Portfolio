import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import NextMCU from "./Movie";

const Bar = () => {
  const [movie, setMovie] = useState<NextMCU>();
  
  useEffect(() => {
    const fetchFunction = async () => {
      let result = await fetch(
        `https://www.whenisthenextmcufilm.com/api`
      );
      let json: NextMCU = await result.json();

      setMovie(json);
    };
    fetchFunction();
  });

  return (
    <div className="Wrapper"> 
    <Navbar>
      <Container>
        <Navbar.Brand>My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="NavBar">
            <NavLink className="NavText" to="/">
              Home
            </NavLink>
            <NavLink className="NavText" to="ExerciseGallery">
              Exercise Gallery
            </NavLink>
            <NavLink className="NavText" to="Contact">
              Contact Us
            </NavLink>
            <NavLink className="NavText" to="Favorites">
              Favorites
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <p className="mcuText">{movie?.title} comes out in: {movie?.days_until} days</p>
    </div>
  );
};

export default Bar;
