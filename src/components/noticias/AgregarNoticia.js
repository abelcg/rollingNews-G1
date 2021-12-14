import React from "react";
import Card from "react-bootstrap/Card";

const AgregarNoticia = () => {
  return (
    <>
      <div class="page-header">
        <h1 class="page-heading">Agregar nueva noticia</h1>
      </div>
      <section>
        <div className="mb-5 row">
          <div className="mb-4 mb-lg-0 col-xxl-9 col-lg-8">
            <Card>
              <Card.Body>
                <label className="form-label" for="postTitle">
                  Título
                </label>
                <input
                  type="text"
                  id="postTitle"
                  className="mb-4 form-control"
                ></input>
                <button type="button" className="mb-4 btn btn-outline-primary">
                  Agregar Media
                </button>
              </Card.Body>
            </Card>
          </div>
            <div className="col-xxl-3 col-lg-4">
                <Card className="shadow-sm mb-4">
                <Card.Header>
                    <h4 className="card-heading">Categorias</h4>
                </Card.Header>
                <Card.Body>

                </Card.Body>
                </Card>
            </div>
        </div>
      </section>
    </>
  );
};

export default AgregarNoticia;
