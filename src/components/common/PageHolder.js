import React from "react";
import AdminError404 from "../pages/AdminError404";
import { Routes, Route } from "react-router-dom";
import AgregarNoticia from "../noticias/AgregarNoticia";
import TablaNoticias from "../noticias/TablaNoticias";
import Categorias from "../noticias/Categorias";

const PageHolder = () => {
  return (
    <div className="page-holder bg-gray-100">
      <div className="px-lg-4 px-xl-5 container-fluid" id="page-container">
        <Routes>
          <Route
            exact
            path="/error404"
            element={<AdminError404></AdminError404>}
          ></Route>
          <Route
            exact
            path="/CMS/noticias"
            element={<TablaNoticias></TablaNoticias>}
          ></Route>
          <Route
            exact
            path="/CMS/agregarNoticia"
            element={<AgregarNoticia></AgregarNoticia>}
          ></Route>
          <Route
            exact
            path="/CMS/categorias"
            element={<Categorias></Categorias>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default PageHolder;
