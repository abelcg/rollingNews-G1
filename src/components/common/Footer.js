import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light my-2">
      <div className="container">
          <div className='row'>
            <h4 className="col-sm-12 col-md-4 text-white lead py-3">
              Encontranos en nuestras redes: </h4>
              <div className='col-sm-12 col-md-8 my-3 text-center'>
              <a className='mx-3 text-light' href="https://facebook.com" target="BLANK_">
                <FaFacebook />
              </a>
              <a className='mx-3 text-light' href="https://twitter.com" target="BLANK_">
                <FaTwitter />
              </a>
              <a className='mx-3 text-light' href="https://instagram.com" target="BLANK_">
                <FaInstagram />
              </a>
              <a className='mx-3 text-light' href="https://youtube.com" target="BLANK_">
                <FaYoutube />
              </a> 
              </div>
              <hr></hr>
             
          </div>
          <Link className="lead nav-link text-secondary text-center" to="/error404">
            Politicas de privacidad
          </Link>

        <p className="text-center text-secondary lead pb-3">
          &copy; Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
