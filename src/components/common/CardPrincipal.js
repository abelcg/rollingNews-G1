import React from 'react';
import { Card } from "react-bootstrap";
import noticiaPrincipal from "../img/noticiaPrincipal.jpg";
import publicidad1 from "../img/publicidad1.jpg";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardPrincipal = () => {
    return (
        <>
             <Card
            className="card card-overlay-bottom card-grid-lg card-bg-scale h-500 mt-5 mb-4"
            style={{
              backgroundImage: `url(${noticiaPrincipal})`,
              backgroundPosition: "center left",
              backgroundSize: "cover",
            }}
          >
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div className="w-100 mt-auto">
                <Link
                  to="#"
                  className="card-link badge bg-danger mb-2 text-decoration-none"
                >
                  <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                  Actualidad
                </Link>
                <Card.Title className="text-white fs-2">
                  <Link
                    to="#"
                    className="card-link btn-link stretched-link text-reset text-decoration-none"
                  >
                    Pfizer y BioNTech dijeron que su vacuna es "eficaz" contra
                    Ómicron luego de tres dosis.
                  </Link>
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
                          <Link
                            to="/acercadenosotros"
                            className="stretched-link text-reset btn-link text-decoration-none"
                          >
                            Abel Córdoba
                          </Link>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item text-white ms-2">| Nov 15, 2021</li>
                </ul>
              </div>
            </div>
          </Card>
        </>
    );
};

export default CardPrincipal;