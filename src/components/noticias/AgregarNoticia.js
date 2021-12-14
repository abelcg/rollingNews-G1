import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const AgregarNoticia = () => {
  const [value, setValue] = useState("");
  console.log(typeof value);
  
  const createMarkup = ()=> {
      return {__html: value};
  }

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
                  maxLength="80"
                ></input>
                <label className="form-label" for="postImg">
                  URL de la imagen
                </label>
                <input
                  type="text"
                  id="postImg"
                  className="mb-4 form-control"
                  maxLength="80"
                ></input>
                {/*  <button type="button" className="mb-4 btn btn-outline-primary">
                  Agregar Media
                </button> */}
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  placeholder="El contenido va aqui..."
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-xxl-3 col-lg-4">
            <Card className="shadow-sm mb-4">
              <Card.Header>
                <h4 className="card-heading">Categorias</h4>
              </Card.Header>
              <Card.Body dangerouslySetInnerHTML = {createMarkup()}></Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgregarNoticia;
