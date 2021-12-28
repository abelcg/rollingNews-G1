import React from 'react';
import noticia2 from "../img/noticia2.jpg";
import publicidad1 from "../img/publicidad1.jpg";
import { Card } from "react-bootstrap";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardConImg = (props) => {

    return (
        <>
           <Card className="card bg-transparent h-100 my-4">
            <div className="position-relative h-100">
              <img
                className="card-img w-100 h-100"
                src={noticia2}
                alt="hombre estresado"
              />
              <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                <div className="w-100 mt-auto">
                  <Link
                    to="/tecnologia"
                    className="card-link badge bg-warning mb-2 text-decoration-none"
                  >
                    <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                    Tecnología
                  </Link>
                </div>
              </div>
            </div>
            <Card.Body className="px-1 pt-3">
              <Card.Title className="card-title">
                <Link
                  to="#"
                  className="card-link btn-link text-reset fw-bold text-decoration-none"
                >
                  ¿Cómo optimizar el tiempo para mejorar la productividad?
                </Link>
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
                        <Link
                          to="#"
                          className="stretched-link text-reset btn-link text-decoration-none"
                        >
                          Juan Alaniz
                        </Link>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">| Enero 22, 2021</li>
              </ul>
            </Card.Body>
          </Card>  
        </>
    );
};

export default CardConImg;