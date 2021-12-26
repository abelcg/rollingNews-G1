import React from 'react';
import { Card } from "react-bootstrap";
import { BsFillRecordCircleFill } from "react-icons/bs";
import publicidad2 from "../../img/publicidad2.jpg"
import { Link } from "react-router-dom";

const CardSinImg = () => {
    return (
        <>
            <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Link to="#" className="card-link badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                Actualidad
              </Link>
              <Card.Title>
                <Link to="#" className="card-link btn-link text-reset fw-bold text-decoration-none">
                Nominan al canciller mexicano Marcelo Ebrard como "persona del
                año" por su demanda contra fabricantes de armas en EE.UU.
                </Link>
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
                        <Link to="/acercadenosotros" className="stretched-link text-reset btn-link">
                          Esteban Marquez
                        </Link>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Octubre 22, 2021</li>
              </ul>
            </Card.Body>
          </Card>
        </>
    );
};

export default CardSinImg;