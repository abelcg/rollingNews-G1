import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoticiasXcategoria from "./NoticiasXcategoria";
import NoticiasPrincipales from "./NoticiasPrincipales";
import TituloPagPrincipal from "./TituloPagPrincipal";

const CuerpoPag = () => {
  return (
    <Fragment>
        <TituloPagPrincipal/>
        <NoticiasPrincipales></NoticiasPrincipales>
        <NoticiasXcategoria></NoticiasXcategoria>
    </Fragment>
  );
};

export default CuerpoPag;
