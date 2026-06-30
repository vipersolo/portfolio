import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>

        <Navbar.Brand
          as={NavLink}
          to="/"
        >
          Antony Jose
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Nav className="ms-auto">

            <Nav.Link
              as={NavLink}
              to="/"
              end
            >
              Home
            </Nav.Link>

            <Nav.Link href="#about">
              About
            </Nav.Link>

            <Nav.Link href="#projects">
              Projects
            </Nav.Link>

            <Nav.Link href="#contact">
              Contact
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavigationBar;