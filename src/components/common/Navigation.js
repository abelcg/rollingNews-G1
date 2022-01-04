import React, { useState, useEffect } from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Modal,
  Button,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import obtenerFecha from "../helpers/fechaLocal";
import ClimaLocal from "../pages/PaginaPrincipal/ClimaLocal";
import Cotizaciones from "../pages/Cotizaciones";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mostrar, setMostrar] = useState(false);
  const handleCerrar = () => setMostrar(false);
  const handleMostrar = () => setMostrar(true);
  const [key, setKey] = useState("login");
  const [passwordShown, setPasswordShown] = useState(false);
  const [navCategorias, setNavcategorias] = useState([]);
  const [sidebarCategorias, setSidebarCategorias] = useState([]);
  const [sidebaDropCategorias, setSidebaDropCategorias] = useState([]);
  const [categoriasTotal, setCategoriasTotal] = useState([]);
  const [error, setError] = useState(true);
  const [error2, setError2] = useState(true);
  const [error3, setError3] = useState(true);

  const URL = process.env.REACT_APP_API_URL_CAT + "?_start=0&_end=6";

  const URL2 = process.env.REACT_APP_API_URL_CAT + "?_start=0&_end=3";

  const URL3 = process.env.REACT_APP_API_URL_CAT;

  const URL4 =
    process.env.REACT_APP_API_URL_CAT +
    "?_start=3&_end=" +
    categoriasTotal.length;

  useEffect(() => {
    consultaAPI();
  }, [error, error2, error3]);

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      const respuesta2 = await fetch(URL2);
      const dato2 = await respuesta2.json();
      const respuesta3 = await fetch(URL3);
      const dato3 = await respuesta3.json();
      const respuesta4 = await fetch(URL4);
      const dato4 = await respuesta4.json();

      setNavcategorias(dato);
      setError(false);

      setSidebarCategorias(dato2);
      setError2(false);

      setCategoriasTotal(dato3);

      setSidebaDropCategorias(dato4);
      setError3(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setError2(true);
      setError3(true);
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
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
                  {!error2
                    ? sidebarCategorias.map((categorias) => (
                        <Link
                          className="nav-link text-secondary text-center"
                          key={categorias.id}
                          to={`/${categorias.nombre}`}
                        >
                          {categorias.nombre}
                        </Link>
                      ))
                    : null}
                  <NavDropdown
                    className="border-0 text-secondary"
                    title="Más"
                    id="nav-dropdown"
                  >
                    {!error3
                      ? sidebaDropCategorias.map((categorias) => (
                          <Link
                            className="dropdown-item text-secondary"
                            key={categorias.id}
                            to={`/${categorias.nombre}`}
                          >
                            {categorias.nombre}
                          </Link>
                        ))
                      : null}
                  </NavDropdown>
                  <Link
                    className="nav-link text-secondary text-center"
                    to="/contacto"
                  >
                    Contacto
                  </Link>

                  <Link
                    className="nav-link  text-secondary text-center"
                    to="/acercadenosotros"
                  >
                    Acerca de nosotros
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Mapa del sitio
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Ayuda
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Términos y condiciones
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Política de Privacidad
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Anúnciese con nosotros
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="d-md-flex d-none flex-row flex-wrap">
              {!error
                ? navCategorias.map((categorias) => (
                    <Link
                      className="nav-link text-secondary"
                      key={categorias.id}
                      to={`/${categorias.nombre}`}
                    >
                      {categorias.nombre}
                    </Link>
                  ))
                : null}
            </div>
            <div className="d-flex flex-row ms-auto">
              <Link
                className="nav-link"
                id="login-btn"
                aria-current="page"
                to="rn/admin"
              >
                Admin
              </Link>
              <a
                className="nav-link btn-sm"
                id="login-btn"
                onClick={handleMostrar}
              >
                Login <AiOutlineLogin className="ms-1 fs-5" />
              </a>
              <Button
                variant="danger"
                className="fw-bold rounded-0"
                id="btn-suscribite"
                onClick={handleShow}
              >
                SUSCRIBITE
              </Button>
            </div>
          </Navbar>
        </Container>
        <Navbar className="shadow" bg="white" variant="light" expand="lg">
          <Container fluid>
            <Link to="/">
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Suscribete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p ClassName="fw-bold">
            <span className="text-danger">Únete a nuestro Newsletters</span>
          </p>
          <Form className="row  g-2 align-items-center justify-content-end">
            <div className="col-12 mb-3">
              <Form.Control type="email" placeholder="Ingrese su email" />
            </div>
            <div className="col-12 text-center">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </div>
            <div className="form-text mt-2 text-center">
              Al subscribirse usted está de acuerdo con nuestra
              <Link
                to="/error404"
                className="text-decoration-underline text-reset ms-2"
              >
                Política de Privacidad
              </Link>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={mostrar} onHide={handleCerrar}>
        <Modal.Header closeButton>Login de Administrador</Modal.Header>
        <Tabs id="tab" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab
            eventKey="login"
            title="Iniciar sesión"
            className="bg-transparent fw-medium border-0"
          >
            <Modal.Body className="card-body py-4">
              <Form>
                <div className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="juanperez@ejemplo.com"
                    maxlength="30"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Por favor ingrese un email valido.
                  </div>
                </div>
                <div className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className="password-toggle">
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      maxlength="30"
                      required=""
                    />
                    <button
                      className="password-toggle-btn text-primary btn"
                      type="button"
                      onClick={togglePassword}
                    >
                      {passwordShown ? (
                        <BsEyeSlashFill></BsEyeSlashFill>
                      ) : (
                        <BsEyeFill></BsEyeFill>
                      )}
                    </button>
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                  <a
                    className="fs-sm text-secondary text-decoration-none btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Presione para el envio del email de recuperacion"
                  >
                    ¿Olvidó su password?
                  </a>
                </div>
                <button
                  className="btn btn-primary btn-shadow d-block w-100"
                  type="submit"
                  onsubmit="login()"
                >
                  Iniciar Sesión
                </button>
                <span className="text-danger" id="login-error"></span>
              </Form>
            </Modal.Body>
          </Tab>
          <Tab
            eventKey="signup"
            title="Regístrate"
            className="bg-transparent fw-medium border-0"
          >
            <Modal.Body className="card-body py-4">
              <Form>
                <div className="mb-3">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    id="su-name"
                    placeholder="Juan Perez"
                    maxlength="30"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Por favor ingrese su nombre.
                  </div>
                </div>
                <div className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="juanperez@ejemplo.com"
                    maxlength="30"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Por favor ingrese un email valido.
                  </div>
                </div>
                <div className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className="password-toggle">
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      id="su-password"
                      maxlength="30"
                      required=""
                    />
                    <a
                      className="password-toggle-btn text-primary btn"
                      type="button"
                      onClick={togglePassword}
                    >
                      {passwordShown ? (
                        <BsEyeSlashFill></BsEyeSlashFill>
                      ) : (
                        <BsEyeFill></BsEyeFill>
                      )}
                    </a>
                  </div>
                </div>
                <div className="mb-3">
                  <Form.Label>Confirmar password</Form.Label>
                  <div className="password-toggle">
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      maxlength="30"
                      required=""
                    />
                    <a
                      className="password-toggle-btn text-primary btn"
                      type="button"
                      onClick={togglePassword}
                    >
                      {passwordShown ? (
                        <BsEyeSlashFill></BsEyeSlashFill>
                      ) : (
                        <BsEyeFill></BsEyeFill>
                      )}
                    </a>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-shadow d-block w-100"
                  type="submit"
                  onsubmit="registerUser()"
                >
                  Regístrate
                </button>
                <span className="text-danger" id="register-error"></span>
              </Form>
            </Modal.Body>
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
};

export default Navigation;
