import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import publicidad1 from "../../img/publicidad1.jpg";
import CardConImg from "../../common/CardConImg";
import CardPrincipal from "../../common/CardPrincipal";
import garciaAndy from "../../img/garciaAndy.png";
import alanizJuan from "../../img/alanizJuan.png";
import cordobaAbel from "../../img/cordobaAbel.png";
import marquezEsteban from "../../img/marquezEsteban.jpg";
import barazzuttiGuillermo from "../../img/barazzuttiGuillermo.png";

const NoticiasPrincipales = () => {
  const URL =
    process.env.REACT_APP_API_URL +
    "?_sort=categoria&_order=desc&categoria=Política&categoria=Economía&categoria=Deportes";
  const [noticias, setNoticias] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState(true);

  const getAvatar = (autor) => {
    let avatarImg = "";
   
    switch (autor) {
      case "Abel Cordoba Gonzalez":
        avatarImg = cordobaAbel;
        setAvatar(avatarImg);
        break;
      case "Juan Alaniz":
        avatarImg = alanizJuan;
        setAvatar(avatarImg);
        break;
      case "Andy Garcia":
        avatarImg = garciaAndy;
        setAvatar(avatarImg);
        break;
      case "Guillermo Barazzutti":
        avatarImg = barazzuttiGuillermo;
        setAvatar(avatarImg);
        break;
      case "Esteban-Marquez":
        avatarImg = marquezEsteban;
        setAvatar(avatarImg);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    consultaAPI();
  }, [error]);

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      console.log(datos);
      setNoticias(datos);
      getAvatar(datos[0].autor)
      setError(false)
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          {!error ? (<CardPrincipal noticias={noticias} avatar={avatar}></CardPrincipal>) : null}
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
          {!error ? (<CardConImg noticias={noticias} avatar={avatar}></CardConImg>) : null}
        </Col>
        <Col md={6}>
        {!error ? (<CardConImg noticias={noticias} avatar={avatar}></CardConImg>) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default NoticiasPrincipales;
