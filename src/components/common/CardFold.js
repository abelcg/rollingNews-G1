import React from "react";
import noticia2 from "../img/noticia2.jpg";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardFold = () => {
  return (
    <>
      <Card className="rounded my-4">
        <div className="card-fold position-relative">
          <img className="card-img" src={noticia2} alt="Card image" />
        </div>
        <Card.Body className="px-2 pt-3">
          <Card.Title className="text-center text-primary small">
            Actualidad
          </Card.Title>
          <Card.Title>
            <Link to="/" className="btn-link text-reset stretched-link fw-bold">
              7 common mistakes everyone makes while traveling
            </Link>
          </Card.Title>
          <Card.Text>
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Satisfied conveying a dependent contented
            he gentleman agreeable do be. Warrant private blushes removed an in
            equally totally if. Delivered dejection necessary objection do Mr
            prevailed. Mr feeling does chiefly cordial in do.{" "}
          </Card.Text>

          <ul className="nav nav-divider align-items-center text-uppercase small">
            <li className="nav-item">
              <span className="me-3 small">
                Por{" "}
                <Link
                  to="/acercadenosotros"
                  className="text-reset btn-link"
                >
                 Abel Córdoba González
                </Link>
              </span>
            </li>
            <li className="nav-item small">| Marzo 07, 2021</li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardFold;
