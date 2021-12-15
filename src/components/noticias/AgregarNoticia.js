import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ direction: "rtl" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const AgregarNoticia = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const createMarkup = () => {
    return { __html: value };
  };

  return (
    <>
      <div className="page-header">
        <h1 className="page-heading">Agregar nueva noticia</h1>
      </div>
      <section>
        <div className="mb-5 row">
          <div className="mb-4 mb-lg-0 col-xxl-9 col-lg-8">
            <Card>
              <Card.Body>
                <Form.Label>
                  Título*
                </Form.Label>
                <Form.Control
                  type="text"
                  id="postTitle"
                  className="mb-4"
                  maxLength="80"
                  required
                ></Form.Control>
                <Form.Label>
                  URL de la imagen*
                </Form.Label>
                <Form.Control
                  type="text"
                  id="postImg"
                  className="mb-4 form-control"
                  maxLength="80"
                  required
                ></Form.Control>
                <Form.Label>
                  Descripción breve*
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  as="textarea"
                  placeholder="Describa el post brevemente aqui..."
                  maxLength="150"
                  required
                />
                <Form.Label>
                  Autor*
                </Form.Label>
                <Form.Select className="mb-3">
                  <option value="">Seleccione un Autor</option>
                  <option value="Abel-Cordoba">Abel Córdoba González</option>
                  <option value="Juan-Alaniz">Juan Alaniz</option>
                  <option value="Andy-Garcia">Andy Garcia</option>
                  <option value="Guillermo-Barazzutti">
                    Guillermo Barazzutti
                  </option>
                  <option value="Esteban-Marquez">Esteban Marquez</option>
                </Form.Select>
                <Form.Label>
                  Contenido*
                </Form.Label>
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  placeholder="El contenido va aqui..."
                  required
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-xxl-3 col-lg-4">
            <Card className="shadow-sm mb-4">
              <Card.Header className="py-4 bg-white">
                <h4 className="card-heading">Categorias*</h4>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Actualidad"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Espectáculos"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Tecnología"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Deportes"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Deportes"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Política"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Economía"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Salud"
                    required
                  />
                  <Form.Check
                    className="form-check"
                    type="checkbox"
                    label="Fotografía"
                    required
                  />
                </div>
                <Link
                  to="/CMS/categorias"
                  className="btn btn-link"
                  role="button"
                >
                  + Agregar Categoria
                </Link>
              </Card.Body>
            </Card>
            <Card className="shadow-sm mb-4">
              <Card.Header className="py-4 bg-white">
                <h4 className="card-heading">Publicar</h4>
              </Card.Header>
              <Card.Body className="text-grey-700">
                <div className="d-flex flex-lg-column mb-4 justify-content-between">
                  <button
                    type="button"
                    className="mb-2 btn btn-outline-secondary btn-sm"
                  >
                    Guardar Borrador
                  </button>
                  <button
                    type="button"
                    className="mb-2 btn btn-outline-secondary btn-sm"
                    onClick={() => setOpen(!open)}
                    aria-controls="vistaPrevia"
                    aria-expanded={open}
                  >
                    Vista Previa: Contenido
                  </button>
                </div>
                <hr className="bg-gray-500"></hr>
                <div className="mb-3">
                  <strong>Fecha de Publicación*</strong>
                </div>
                <div className="py-3 row">
                  <div className="col-lg-6">
                    <Form.Control
                      size="sm"
                      type="date"
                      placeholder="15/12/2020"
                      required
                    />
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-end">
                <button type="button" className="btn btn-primary">
                  Publicar
                </button>
              </Card.Footer>
            </Card>
          </div>
          <div className="my-3 mb-lg-0 col-xxl-9 col-lg-8">
          <Collapse in={open}>
            <Card className="shadow-sm mb-4" id="vistaPrevia">
              <Card.Header className="py-4 bg-white">
                <h4 className="card-heading">Vista Previa del Contenido</h4>
              </Card.Header>
              <Card.Body
                className="text-grey-700"
                dangerouslySetInnerHTML={createMarkup()}
              ></Card.Body>
            </Card>
            </Collapse>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgregarNoticia;
