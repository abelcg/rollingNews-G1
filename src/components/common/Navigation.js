import React from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import obtenerFecha from "../helpers/fechaLocal";
import ClimaLocal from "../pages/PaginaPrincipal/ClimaLocal";
import Cotizaciones from "../pages/Cotizaciones";

const Navigation = () => {
  return (
    <header>
      <Container fluid>
        <Navbar
          expand={false}
          className="d-flex flex-lg-row justify-content-start"
        >
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Offcanvas id="navbar-nav">
            <Offcanvas.Header
              className="ms-auto"
              closeButton
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Link
                  className="nav-link text-secondary text-center"
                  to="/actualidad"
                >
                  Actualidad
                </Link>
                <Link
                  className="nav-link text-secondary text-center"
                  to="/espectaculos"
                >
                  Espectáculos
                </Link>
                <Link
                  className="nav-link text-secondary text-center"
                  to="/tecnologia"
                >
                  Tecnología
                </Link>
                <NavDropdown
                  className="border-0 text-secondary"
                  title="Más"
                  id="nav-dropdown"
                >
                  <Link className="dropdown-item text-secondary" to="/deportes">
                    Deportes
                  </Link>
                  <Link className="dropdown-item text-secondary" to="/politica">
                    Política
                  </Link>
                  <Link className="dropdown-item text-secondary" to="/economia">
                    Economía
                  </Link>
                  <Link className="dropdown-item text-secondary" to="/salud">
                    Salud
                  </Link>
                  <Link
                    className="dropdown-item text-secondary"
                    to="/fotografia"
                  >
                    Fotografia
                  </Link>
                  <Link
                    className="dropdown-item text-secondary"
                    to="/internacional"
                  >
                    Internacional
                  </Link>
                </NavDropdown>
                <Link class="nav-link text-secondary text-center" to="/contacto">
                  Contacto
                </Link>

                <Link class="nav-link  text-secondary text-center" to="/acercadenosotros">
                  Acerca de nosotros
                </Link>

                <Link class="nav-link text-secondary text-center" to="/error404">
                  Mapa del sitio
                </Link>

                <Link class="nav-link text-secondary text-center" to="/error404">
                  Ayuda
                </Link>

                <Link class="nav-link text-secondary text-center" to="/error404">
                  Términos y condiciones
                </Link>

                <Link class="nav-link text-secondary text-center" to="/error404">
                  Política de Privacidad
                </Link>

                <Link class="nav-link text-secondary text-center" to="/error404">
                  Anúnciese con nosotros
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="d-md-flex d-none flex-row flex-wrap">
            <Link className="nav-link text-secondary" to="/actualidad">
              Actualidad
            </Link>
            <Link className="nav-link text-secondary" to="/espectaculos">
              Espectáculos
            </Link>
            <Link className="nav-link text-secondary" to="/tecnologia">
              Tecnología
            </Link>
            <Link className="nav-link text-secondary" to="/deportes">
              Deportes
            </Link>
            <Link className="nav-link text-secondary" to="/politica">
              Política
            </Link>
            <Link className="nav-link text-secondary" to="/economia">
              Economía
            </Link>
          </div>
          <div className="d-flex flex-row ms-auto">
            <Link
              className="nav-link"
              id="login-btn"
              aria-current="page"
              to="/admin"
            >
              Admin
            </Link>
            <Link
              className="nav-link"
              id="login-btn"
              aria-current="page"
              to="/login"
            >
              Login <AiOutlineLogin className="ms-1 fs-5" />
            </Link>
            <Link
              className="btn btn-danger fw-bold rounded-0"
              id="btn-suscribite"
              data-bs-toggle="modal"
              data-bs-target="#ModalSuscripcion"
              to=""
            >
              SUSCRIBITE
            </Link>
          </div>
        </Navbar>
      </Container>
      <Navbar className="shadow" bg="white" variant="light" expand="lg">
        <Container fluid>
          <Link to="/inicio">
            <img
              className="img-fluid"
              src="logo.png"
              alt="RollingNews logo"
            ></img>
          </Link>
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <Cotizaciones></Cotizaciones>
            <Navbar.Text className="text-center">
              <ClimaLocal></ClimaLocal>
            </Navbar.Text>
            <Navbar.Text className="text-center fw-bold">
              {obtenerFecha()}
            </Navbar.Text>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;