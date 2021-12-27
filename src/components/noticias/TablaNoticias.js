import React, { useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
import Table from "react-bootstrap/Table";
import ItemNoticia from "./ItemNoticia";

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
            to="agregarNoticia"
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
               <ItemNoticia key={noticias.id} noticias={noticias} consultaAPI={props.consultaAPI}></ItemNoticia>
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
