import React from "react";
import pillow from "../img/pillow.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AiOutlineSwapLeft } from "react-icons/ai";

const Error404 = () => {
  return (
    <div
      className="text-center p-4"
      style={{
        backgroundImage: `url(${pillow})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
      }}
    ><h1 className="display-1 text-danger text-center">404</h1>
    <h2>Página no encontrada</h2>
    <p className="text-center text-secondary lead fs-6">Hubo un problema o la página no existe más.</p>
    <Link to="/inicio" className="btn btn-danger mt-3">
      <AiOutlineSwapLeft className="me-3"></AiOutlineSwapLeft>
      Volver al inicio</Link>
    </div>
  );
};

export default Error404;
