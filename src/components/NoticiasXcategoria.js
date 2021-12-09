import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const NoticiasXcategoria = () => {
  return (
    <Container>
      <hr className="text-danger" />
      <Row className="my-4">
        <Col md={4}>
          <h3>Actualidad</h3>
          <Card>
            <Card.Body>
              <Card.Title>
                Nominan al canciller mexicano Marcelo Ebrard como "persona del
                año" por su demanda contra fabricantes de armas en EE.UU.
              </Card.Title>
              <Card.Text>
                El Gobierno mexicano señala a 11 empresas estadounidenses de
                promover prácticas comerciales que facilitan el tráfico ilegal
                de armamento y alimentan la violencia en el país
                latinoamericano.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>
                El príncipe Enrique anima a la gente a dejar sus trabajos si no
                les reportan felicidad y la Red no le perdona.
              </Card.Title>
              <Card.Text>
                El duque de Sussex cree que la gente tiene que rechazar un
                trabajo que daña a su salud mental.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <h3>Espectáculos</h3>
          <Card>
            <Card.Body>
              <Card.Title>
                BTS, Adele y todos los artistas que ganaron en los People's
                Choice Awards 2021.
              </Card.Title>
              <Card.Text>
                BTS y Adele fueron algunos de los artistas galardonados que más
                destacaron en los People's Choice Awards 2021.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                The Walking Dead revela el secreto del origen de los zombies en
                la serie.
              </Card.Title>
              <Card.Text>
                La serie spinoff <b>"The Walking Dead: World Beyond"</b>{" "}
                finalmente reveló cómo surgió el <b>virus zombie</b> que casi
                extermina a la humanidad. Descubrilo aquí.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <h3>Tecnología</h3>
          <Card>
            <Card.Body>
              <Card.Title>Estas gafas ayudaron a un hombre ciego a volver a ver tras 40 años.</Card.Title>
              <Card.Text>
                Un tratamiento sin precedentes de GenSight Biologics le devolvió parcialmente la vista a un paciente <b>ciego</b>, al convinar la terapia génica con unas gafas especializadas.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>La NASA lanza una demostración de un láser que podría revolucionar la comunicación espacial.</Card.Title>
              <Card.Text>
                La demostración del retransmisor de comunicaciones láser (LCRD, por sus siglas en inglés) de la NASA podría revolucionar la forma en que la agencia se comunica con futuras misiones en todo el sistema solar.
              </Card.Text>
              <Card.Link href="#">Ver más... </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <hr />
        <Col md={6}>
          <p>Publicidad</p>
          <img src="logo192.png" alt="publicidad" />
        </Col>
        <Col md={6}>
          <p>Publicidad</p>
          <img src="logo192.png" alt="publicidad" />
        </Col>
      </Row>
    </Container>
  );
};

export default NoticiasXcategoria;
