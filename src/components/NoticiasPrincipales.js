import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import noticiaPrincipal from "../img/noticiaPrincipal.jpg";
import noticia2 from "../img/noticia2.jpg";
import noticia3 from "../img/noticia3.jpg";
import publicidad1 from '../img/publicidad1.jpg'

const NoticiasPrincipales = () => {
  return (
    <Container>
      <Row>
        <Col md={10}>
          <Card className="my-4">
            <Row>
              <Col md={6}>
                <Card.Body>
                  <Card.Title className="mb-4">
                    Pfizer y BioNTech dijeron que su vacuna es "eficaz" contra
                    Ómicron luego de tres dosis
                  </Card.Title>
                  <hr />
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
                  alt="logonews"
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={2}>
          <img className='w-100' src={publicidad1} alt="publicidad McDonald's" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="my-4">
                <Card.Img
                  variant="bottom"
                  src={noticia2}
                  alt="logonews"
                />
                <Card.Body>
                  <Card.Title>
                    ¿Cómo optimizar el tiempo para mejorar la productividad?
                  </Card.Title>
                  <hr />
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
                <Card.Img
                  variant="top"
                  src={noticia3}
                  alt="logonews"
                />
                <Card.Body>
                  <Card.Title>
                    Convoca a 900 empleados a la misma reunión por Zoom y los
                    despide a todos: en apenas un minuto, el CEO de esta empresa
                    echó al 15% de su plantilla
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    El CEO de la fintech estadounidense Better.com, Vishal Garg,
                    organizó el pasado miércoles una reunión por Zoom a la que
                    estaban invitados 900 empleados. En esa misma
                    comunicación a distancia el dirigente de la compañía les
                    informó de que todos los que habían sido invitados a la
                    vidoconferencia estaban despedidos, según la BBC.
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
