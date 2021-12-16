import React, { useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from "react-router-dom";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
import Table from "react-bootstrap/Table";

const TablaNoticias = (props) => {
  const dataTableRef = useRef(false);

  useEffect(() => {
    const dataTable = new DataTable(dataTableRef.current, { 
      searchable: true,
      fixedHeight: true,
      sortable: true,
      labels: {
        placeholder: "Buscar...",
        perPage: "{select} entradas por página",
        noRows: "Ninguna entrada fue encontrada",
        info: "Mostrando del {start} al {end} de {rows} entradas",
      },
    });
  }, []);
   
  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center">
        <h1 className="page-heading">Noticias</h1>
        <div>
          <Link
            to="/CMS/agregarNoticia"
            className="text-uppercase btn btn-primary fs-5"
          >
            <i className="bi bi-plus fs-5 fw-bold"></i>
            Agregar nueva
          </Link>
        </div>
      </div>
      <section className="mb-5">
        <Card className="card-table">
          <Table
            className=" mb-1 table-borderless table-hover table-light table-striped w-100"
            responsive
            ref={dataTableRef}
          >
            <thead className="table-dark text-light">
              <tr>
                <th>Título</th>
                <th>Categoria</th>
                <th>Autor</th>
                <th>Fecha de publicación</th>
                <th>Botones de acción</th>
              </tr>
            </thead>
            <tbody>
              {props.noticias.map((noticias) => (
                <tr key={noticias.id}>
                  <td>
                    <div
                      className="d-inline-block me-3"
                      style={{ width: "100px" }}
                    >
                      <div
                        style={{
                          display: "block",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: "0",
                        }}
                      >
                        <div
                          style={{
                            display: "block",
                            boxSizing: "border-box",
                            paddingTop: "66%",
                          }}
                        ></div>
                        <img
                          alt={noticias.titulo}
                          sizes="100px"
                          srcset={noticias.imagen}
                          decoding="async"
                          data-nimg="true"
                          className="img-fluid rounded"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        ></img>
                      </div>
                    </div>
                    <strong className="d-block text-wrap">
                      {noticias.titulo}
                    </strong>
                  </td>
                  <td>{noticias.categoria}</td>
                  <td>{noticias.autor}</td>
                  <td>{noticias.fecha}</td>
                  <td>
                    <ButtonGroup>
                    <Link
                      className="btn btn-warning ms-2"
                      to={`/noticias/editar/${props.noticias.id}`}
                    >
                      <i className="bi bi-pencil mb-2"></i>
                    </Link>
                    <Button
                      className="ms-2"
                      variant="danger"
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Card.Footer></Card.Footer>
        </Card>
      </section>
    </>
  );
};

export default TablaNoticias;
