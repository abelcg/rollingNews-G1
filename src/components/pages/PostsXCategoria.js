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
      <section class="position-relative pt-0">
        <Container>
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
          <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div>
            <div class="col-sm-6 col-lg-3">
              <CardFold></CardFold>
            </div> 
          </div>
          <nav
            class="mb-5 d-flex justify-content-center"
            aria-label="navigation"
          >
            <ul class="pagination pagination-bordered ">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Prev
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item disabled">
                <a class="page-link" href="#">
                  ..
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  15
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav> 
        </Container>
      </section>
    </>
  );
};

export default PostsXCategoria;
