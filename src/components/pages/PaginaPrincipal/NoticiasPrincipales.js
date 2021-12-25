import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import noticiaPrincipal from "../../../img/noticiaPrincipal.jpg";
import noticia2 from "../../../img/noticia2.jpg";
import noticia3 from "../../../img/noticia2.jpg";
import publicidad1 from "../../../img/publicidad1.jpg";
import { BsFillRecordCircleFill } from "react-icons/bs";

const NoticiasPrincipales = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          {/*  <Card className="my-4">
            <Row>
              <Col md={6}>
                <Card.Body>
                  <Card.Title className="mb-4">
                    Pfizer y BioNTech dijeron que su vacuna es "eficaz" contra
                    Ómicron luego de tres dosis.
                  </Card.Title>
                  <hr className='text-danger' />
                  <Card.Text>
                    "Probablemente, no queda suficientemente neutralizada
                    después de dos dosis", comunicó BioNTech sobre la nueva
                    variante.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Ver más...</Card.Link>
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Img
                  variant="top"
                  src={noticiaPrincipal}
                  alt="vacuna pfizer"
                />
              </Col>
            </Row>
          </Card> */}
          <Card
           className="card card-overlay-bottom card-grid-lg card-bg-scale h-500 my-4"
           style={{backgroundImage: `url(${noticiaPrincipal})`,
           backgroundPosition: "center left",
           backgroundSize: "cover"}}
          >
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div className="w-100 mt-auto">
                <Card.Link href="#" className="badge bg-danger mb-2 text-decoration-none">
                  <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                  Actualidad
                </Card.Link>
                <Card.Title className="text-white fs-2">
                  <Card.Link href="#" className="btn-link stretched-link text-reset text-decoration-none">
                  Pfizer y BioNTech dijeron que su vacuna es "eficaz" contra
                    Ómicron luego de tres dosis.
                  </Card.Link>
                </Card.Title>
                <Card.Text className="text-white">
                "Probablemente, no queda suficientemente neutralizada
                    después de dos dosis", comunicó BioNTech sobre la nueva
                    variante.
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
          </Card>
        </Col>
        <Col md={3}>
          <img
            className="w-100 h-auto border border-2 border-danger mt-4"
            src={publicidad1}
            alt="publicidad Mr.Clean"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="my-4">
            <Card.Img variant="bottom" src={noticia2} alt="hombre estresado" />
            <Card.Body>
              <Card.Title>
                ¿Cómo optimizar el tiempo para mejorar la productividad?.
              </Card.Title>
              <hr className="text-danger" />
              <Card.Text>
                Muchas veces sentimos que el tiempo pasa volando...
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="my-4">
            <Row>
              <Card.Img variant="top" src={noticia3} alt="empleado IT" />
              <Card.Body>
                <Card.Title>
                  Convoca a 900 empleados a la misma reunión por Zoom y los
                  despide a todos: en apenas un minuto, el CEO de esta empresa
                  echó al 15% de su plantilla.
                </Card.Title>
                <hr className="text-danger" />
                <Card.Text>
                  El CEO de la fintech estadounidense Better.com, Vishal Garg,
                  organizó el pasado miércoles una reunión por Zoom a la que
                  estaban invitados 900 empleados. En esa misma comunicación a
                  distancia el dirigente de la compañía les informó de que todos
                  los que habían sido invitados a la vidoconferencia estaban
                  despedidos, según la BBC.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Ver más...</Card.Link>
              </Card.Body>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NoticiasPrincipales;
