import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import publicidad3 from "../../../img/publicidad3.jpg";
import publicidad4 from "../../../img/publicidad4.jpg";
import publicidad2 from "../../../img/publicidad2.jpg";
import CardSinImg from "../../common/CardSinImg";

const NoticiasXcategoria = () => {
  return (
    <Container>
      <Row className="my-4 g-2">
        <Col md={12}>
          <div className="text-center my-3">
            <img
              className="w-50 h-auto my-2 border"
              src={publicidad2}
              alt="publicidad"
            />
          </div>
        </Col>
        <hr className="text-danger" />
        <Col md={4}>
          <h3 className="text-center">Actualidad</h3>
          {/* <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Card.Link href="#" className="badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                Actualidad
              </Card.Link>
              <Card.Title>
                <Card.Link href="#" className="btn-link text-reset fw-bold text-decoration-none">
                Nominan al canciller mexicano Marcelo Ebrard como "persona del
                año" por su demanda contra fabricantes de armas en EE.UU.
                </Card.Link>
              </Card.Title>
              <Card.Text className="m-0 text-decoration-none">
                El Gobierno mexicano señala a 11 empresas estadounidenses de
                promover prácticas comerciales que facilitan el tráfico ilegal
                de armamento y alimentan la violencia en el país
                latinoamericano.
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad2}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a href="#" className="stretched-link text-reset btn-link">
                          Esteban Marquez
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Octubre 22, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
          <CardSinImg></CardSinImg>
          {/*  <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Card.Link href="#" className="badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                Actualidad
              </Card.Link>
              <Card.Title>
                <Card.Link href="#" className="btn-link text-reset fw-bold text-decoration-none">
                El príncipe Enrique anima a la gente a dejar sus trabajos si no
                les reportan felicidad y la Red no le perdona.
                </Card.Link>
              </Card.Title>
              <Card.Text className="m-0 text-decoration-none">
              El duque de Sussex cree que la gente tiene que rechazar un
                trabajo que daña a su salud mental.
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad2}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a href="#" className="stretched-link text-reset btn-link">
                          Esteban Marquez
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Octubre 22, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
           <CardSinImg></CardSinImg>
        </Col>

        <Col md={4}>
          <h3 className="text-center">Espectáculos</h3>
          {/*  <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Card.Link href="#" className="badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
              Espectáculos
              </Card.Link>
              <Card.Title>
                <Card.Link href="#" className="btn-link text-reset fw-bold text-decoration-none">
                BTS, Adele y todos los artistas que ganaron en los People's
                Choice Awards 2021.
                </Card.Link>
              </Card.Title>
              <Card.Text className="m-0 text-decoration-none">
              BTS y Adele fueron algunos de los artistas galardonados que más
                destacaron en los People's Choice Awards 2021.
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad2}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a href="#" className="stretched-link text-reset btn-link">
                          Esteban Marquez
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Octubre 22, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
          {/* <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Card.Link href="#" className="badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
              Espectáculos
              </Card.Link>
              <Card.Title>
                <Card.Link href="#" className="btn-link text-reset fw-bold text-decoration-none">
                The Walking Dead revela el secreto del origen de los zombies en
                la serie
                </Card.Link>
              </Card.Title>
              <Card.Text className="m-0 text-decoration-none">
              La serie spinoff <b>"The Walking Dead: World Beyond"</b>{" "}
                finalmente reveló cómo surgió el <b>virus zombie</b> que casi
                extermina a la humanidad. Descubrilo aquí.
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad2}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a href="#" className="stretched-link text-reset btn-link">
                          Esteban Marquez
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Octubre 22, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
           <CardSinImg></CardSinImg>
           <CardSinImg></CardSinImg>
        </Col>

        <Col md={4}>
          <h3 className="text-center">Tecnología</h3>
           {/* <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Card.Link href="#" className="badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
              Tecnología
              </Card.Link>
              <Card.Title>
                <Card.Link href="#" className="btn-link text-reset fw-bold text-decoration-none">
                Estas gafas ayudaron a un hombre ciego a volver a ver tras 40
                años
                </Card.Link>
              </Card.Title>
              <Card.Text className="m-0 text-decoration-none">
              Un tratamiento sin precedentes de GenSight Biologics le devolvió
                parcialmente la vista a un paciente <b>ciego</b>, al convinar la
                terapia génica con unas gafas especializadas.
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad2}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a href="#" className="stretched-link text-reset btn-link">
                          Esteban Marquez
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Octubre 22, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
          {/* <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Card.Link href="#" className="badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
              Tecnología
              </Card.Link>
              <Card.Title>
                <Card.Link href="#" className="btn-link text-reset fw-bold text-decoration-none">
                La NASA lanza una demostración de un láser que podría
                revolucionar la comunicación espacial
                </Card.Link>
              </Card.Title>
              <Card.Text className="m-0 text-decoration-none">
              La demostración del retransmisor de comunicaciones láser (LCRD,
                por sus siglas en inglés) de la NASA podría revolucionar la
                forma en que la agencia se comunica con futuras misiones en todo
                el sistema solar
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={publicidad2}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <a href="#" className="stretched-link text-reset btn-link">
                          Esteban Marquez
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Octubre 22, 2021</li>
              </ul>
            </Card.Body>
          </Card> */}
           <CardSinImg></CardSinImg>
           <CardSinImg></CardSinImg>
        </Col>
      </Row>
      <Row>
        <hr className="text-danger"/>
        <Col md={6}>
          <img
            className="w-100 h-auto my-2"
            src={publicidad3}
            alt="publicidad"
          />
        </Col>
        <Col md={6}>
          <img
            className="w-100 h-auto my-2"
            src={publicidad4}
            alt="publicidad"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NoticiasXcategoria;
