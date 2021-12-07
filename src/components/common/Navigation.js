import React from "react";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Link to='/inicio'>
            <img className='border rounded-circle' src="logo.png" width="65" alt="RollingNews logo"></img>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link
                  className="nav-link border justify-content-center my-2 rounded bg-danger mx-2 text-white d-flex align-items-center"
                  to="/ingresar"
                >
                  Ingresar
                </Link>
                <Link
                  className="nav-link border justify-content-center my-2 rounded bg-danger mx-2 text-white d-flex align-items-center"
                  to="/suscribite"
                >
                  Suscribíte
                </Link>
                <Link
                  className="nav-link border justify-content-center my-2 rounded bg-danger mx-2 text-white d-flex align-items-center"
                  to="/actualidad"
                >
                  Actualidad
                </Link>
                <Link
                  className="nav-link border justify-content-center my-2 rounded bg-danger mx-2 text-white d-flex align-items-center"
                  to="/espectaculos"
                >
                  Espectáculos
                </Link>
                <Link
                  className="nav-link border justify-content-center my-2 rounded bg-danger mx-2 text-white d-flex align-items-center"
                  to="/tecnologia"
                >
                  Tecnología
                </Link>
                <NavDropdown className='bg-danger nav-link border rounded text-center mx-2 my-2' title="Más" id="basic-nav-dropdown">
                  <Link className='bg-danger nav-link border border-dark text-light text-center' to='/deportes'>
                    Deportes
                  </Link>
                  <Link className='bg-danger nav-link border border-dark text-light text-center' to='/politica'>
                    Política
                  </Link>
                  <Link className='bg-danger nav-link border border-dark text-light text-center' to='/economia'>
                    Economía
                  </Link>
                  <Link className='bg-danger nav-link border border-dark text-light text-center' to='/salud'>Salud</Link>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navigation;
