import React, { useState, useEffect } from "react";
import AdminError404 from "../pages/AdminError404";
import { Routes, Route } from "react-router-dom";
import AgregarNoticia from "../noticias/AgregarNoticia";
import TablaNoticias from "../noticias/TablaNoticias";
import Categorias from "../noticias/Categorias";
import EditarNoticia from "../noticias/EditarNoticia";

const PageHolder = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultaAPI();
  }, []);

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setNoticias(datos);
    } catch (error) {
      console.log(error);
    }
  };
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
            element={<TablaNoticias noticias={noticias} consultaAPI={consultaAPI}></TablaNoticias>}
          ></Route>
          <Route
            exact
            path="/CMS/agregarNoticia"
            element={<AgregarNoticia consultaAPI={consultaAPI}></AgregarNoticia>}
          ></Route>
          <Route
            exact
            path="/CMS/noticias/editar/:id"
            element={<EditarNoticia consultaAPI={consultaAPI}></EditarNoticia>}
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
