import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./navbar.css"; // Import the custom styles

interface BarProps {
  // Add props here if needed
}

const Bar: React.FC<BarProps> = () => {
  return (
    <div className="wrapper">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-bar">
              <NavLink className="nav-text" to="/">
                Home
              </NavLink>
              <NavLink className="nav-text" to="Experiences">
                Experiences
              </NavLink>
              <NavLink className="nav-text" to="Contact">
                Contact Me
              </NavLink>
              <NavLink className="nav-text" to="Favorites">
                Favorites
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Bar;