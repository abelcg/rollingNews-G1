import React, { useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
import Table from "react-bootstrap/Table";

const Categorias = () => {
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
      <div className="page-header">
        <h1 className="page-heading">Categorias</h1>
      </div>
      <section>
        <div className="mb-5 row">
          <div className="col-lg-3 mb-4">
            <Card className="mb-4 mb-lg-0">
              <Card.Body>
                <div className="mb-4">
                  <Form.Label>Nombre*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la categoria"
                    defaultValue="Actualidad"
                    maxLength="20"
                    required
                  />
                </div>
                <div className="mb-4">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    className="mb-4"
                    as="textarea"
                    placeholder="Describa la categoria brevemente aqui..."
                    maxLength="80"
                  />
                  <Form.Text className="text-muted">
                    La descripción se puede obviar, pero en algunos temas es útil.
                  </Form.Text>
                </div>
                  <button type="button" className="my-4 btn btn-primary">Agregar Nueva Categoria</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-9 mb-4">
          <Card className="card-table">
          <Table
            className=" mb-1 table-borderless table-hover table-light table-striped w-100"
            responsive
            ref={dataTableRef}
          >
            <thead className="table-dark text-light">
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Botones de acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <Card.Footer></Card.Footer>
          </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categorias;
