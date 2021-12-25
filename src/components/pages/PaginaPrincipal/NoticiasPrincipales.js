import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import noticiaPrincipal from "../../../img/noticiaPrincipal.jpg";
//import noticia2 from "../../../img/noticia2.jpg";
//import noticia3 from "../../../img/noticia3.jpg";
import publicidad1 from "../../../img/publicidad1.jpg";
import CardConImg from "../../common/CardConImg";
import CardPrincipal from "../../common/CardPrincipal";
//import { BsFillRecordCircleFill } from "react-icons/bs";

const NoticiasPrincipales = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={9}>
         {/*  <Card
            className="card card-overlay-bottom card-grid-lg card-bg-scale h-500 mt-5 mb-4"
            style={{
              backgroundImage: `url(${noticiaPrincipal})`,
              backgroundPosition: "center left",
              backgroundSize: "cover",
            }}
          >
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div className="w-100 mt-auto">
                <Card.Link
                  href="#"
                  className="badge bg-danger mb-2 text-decoration-none"
                >
                  <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                  Actualidad
                </Card.Link>
                <Card.Title className="text-white fs-2">
                  <Card.Link
                    href="#"
                    className="btn-link stretched-link text-reset text-decoration-none"
                  >
                    Pfizer y BioNTech dijeron que su vacuna es "eficaz" contra
                    Ómicron luego de tres dosis.
                  </Card.Link>
                </Card.Title>
                <Card.Text className="text-white">
                  "Probablemente, no queda suficientemente neutralizada después
                  de dos dosis", comunicó BioNTech sobre la nueva variante.
                </Card.Text>
                <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                  <li className="nav-item">
                    <div>
                      <div className="d-flex align-items-center text-white position-relative">
                        <div className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            src={publicidad1}
                            alt="avatar"
                          />
                        </div>
                        <span className="ms-3">
                          Por{" "}
                          <a
                            href="#"
                            className="stretched-link text-reset btn-link text-decoration-none"
                          >
                            Abel Córdoba
                          </a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item text-white ms-2">| Nov 15, 2021</li>
                </ul>
              </div>
            </div>
          </Card> */}
          <CardPrincipal></CardPrincipal>
        </Col>
        <Col md={3}>
          <img
            className="w-100 h-auto border border-2 border-danger mt-5"
            src={publicidad1}
            alt="publicidad Mr.Clean"
          />
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={6}>
         {/*  <Card className="card bg-transparent h-100 my-4">
            <div className="position-relative h-100">
              <img
                className="card-img w-100 h-100"
                src={noticia2}
                alt="hombre estresado"
              />
              <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                <div className="w-100 mt-auto">
                  <Card.Link
                    href="#"
                    className="badge bg-warning mb-2 text-decoration-none"
                  >
                    <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                    Tecnología
                  </Card.Link>
                </div>
              </div>
            </div>
            <Card.Body className="px-1 pt-3">
              <Card.Title className="card-title">
                <Card.Link
                  href="#"
                  className="btn-link text-reset fw-bold text-decoration-none"
                >
                  ¿Cómo optimizar el tiempo para mejorar la productividad?
                </Card.Link>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                assumenda eum voluptatem quibusdam, minus veritatis sequi dolor
                voluptate beatae nostrum accusantium expedita asperiores hic
                velit commodi? Ipsa quae tempora ducimus!
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad1}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link text-decoration-none"
                        >
                          Juan Alaniz
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">| Enero 22, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
          <CardConImg></CardConImg>
        </Col>
        <Col md={6}>
         {/*  <Card className="card bg-transparent h-100 my-4">
            <div className="position-relative h-100">
              <img
                className="card-img w-100 h-100"
                src={noticia3}
                alt="empleado IT"
              />
              <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                <div className="w-100 mt-auto">
                  <Card.Link
                    href="#"
                    className="badge bg-warning mb-2 text-decoration-none"
                  >
                    <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                    Tecnología
                  </Card.Link>
                </div>
              </div>
            </div>
            <Card.Body className="px-1 pt-3">
              <Card.Title className="card-title">
                <Card.Link
                  href="#"
                  className="btn-link text-reset fw-bold text-decoration-none"
                >
                  Convoca a 900 empleados a la misma reunión por Zoom y los
                  despide a todos
                </Card.Link>
              </Card.Title>
              <Card.Text>
                En apenas un minuto, el CEO de esta empresa echó al 15% de su
                plantilla.La fintech estadounidense Better.com, Vishal Garg,
                organizó el pasado miércoles una reunión por Zoom a la que
                estaban invitados 900 empleados. 
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad1}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link text-decoration-none"
                        >
                          Andy Garcia
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">| Agosto 15, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
          <CardConImg></CardConImg>
        </Col>
      </Row>
    </Container>
  );
};

export default NoticiasPrincipales;
