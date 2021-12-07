import React from "react";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          width="70"
          className="ms-5 d-inline-block align-top border rounded-circle"
          alt="RollingNews Logo"
        />
      </Navbar.Brand>
      <Container>
        <Nav className="ms-auto">
          <Link
            className="nav-link btn btn-danger me-1 text-dark d-flex align-items-center border"
            to="/"
          >
            Ingresar
          </Link>
          <Link
            className="nav-link btn btn-danger me-1 text-dark d-flex align-items-center border"
            to=""
          >
            Suscribite
          </Link>
          <Link
            className="nav-link btn btn-danger me-1 text-dark d-flex align-items-center border"
            to=""
          >
            Actualidad
          </Link>
          <Link
            className="nav-link btn btn-danger me-1 text-dark d-flex align-items-center border"
            to=""
          >
            Espectáculos
          </Link>
          <Link
            className="nav-link btn btn-danger me-1 text-dark d-flex align-items-center border"
            to=""
          >
            Tecnología
          </Link>
          <Link
            className="px-3 nav-link btn btn-danger me-1 text-dark d-flex align-items-center border"
            to=""
          >
            Deportes
          </Link>
          <NavDropdown
            className="bg-danger me-1 text-dark border rounded"
            title="Más"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="bg-danger border border-dark py-2 text-center" href="">
              Política
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-danger border border-dark py-2 text-center" href="">
              Economía
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-danger border border-dark py-2 text-center" href="">Salud</NavDropdown.Item>
            <NavDropdown.Item className="bg-danger border border-dark py-2 text-center" href="">Fotografía</NavDropdown.Item>
          </NavDropdown>
          <Link
            className="px-3 nav-link btn btn-danger me-1 text-dark d-flex align-items-center border"
            to=""
          >
            Login
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
