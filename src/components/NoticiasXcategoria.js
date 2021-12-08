import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const NoticiasXcategoria = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h3>Categoria 1</h3>
          <Card>
            <Card.Body>
              <Card.Title>Noticia 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, quod.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Noticia 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, quod.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <h3>Categoria 2</h3>
          <Card>
            <Card.Body>
              <Card.Title>Noticia 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, quod.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Noticia 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, quod.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <h3>Categoria 3</h3>
          <Card>
            <Card.Body>
              <Card.Title>Noticia 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, quod.
              </Card.Text>
              <Card.Link href="#">Ver más...</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Noticia 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, quod.
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
