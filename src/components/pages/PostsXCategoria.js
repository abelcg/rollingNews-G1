import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";
import CardFold from "../common/CardFold";

const PostsXCategoria = () => {
  return (
    <>
      <section className="pt-4">
        <Container>
          <div className="row">
            <div className="col-12">
              <div className="bg-primary-soft text-center rounded-3 p-4">
                <h1 className="text-primary">Categoria</h1>
                <nav
                  className="d-flex justify-content-center"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-decoration-none" to="/">
                        <BiHomeCircle></BiHomeCircle> Inicio
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Posts Totales</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="position-relative pt-0">
        <Container>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
          <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div className="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div> 
          </div>
          <nav
            className="mb-5 d-flex justify-content-center"
            aria-label="navigation"
          >
            <ul className="pagination pagination-bordered ">
              <li className="page-item disabled">
                <Link
                  className="page-link"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Prev
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  ..
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  15
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav> 
        </Container>
      </section>
    </>
  );
};

export default PostsXCategoria;
