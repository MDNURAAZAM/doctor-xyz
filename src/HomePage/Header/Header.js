import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Doctor ANY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="text-white">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-white">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" className="text-white">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
