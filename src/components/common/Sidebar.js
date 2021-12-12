import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState("");
  const [activeLink, setActiveLink] = useState(null);
  const listOptions = [
    { text: "Noticias", route: "/CMS/noticias" },
    { text: "Agregar Noticia", route: "/CMS/agregarNoticia" },
    { text: "Categorias", route: "/CMS/categorias" }
  ];
  console.log(activeLink)
  return (
    <div className="d-flex align-items-stretch">
      <div
        className={
          props.clicked ? "sidebar py-3 ms-0 show" : "sidebar py-3 ms-0 shrink"
        }
      >
        <div className="logo-details">
          <div className="logo_name">RollingNews</div>
        </div>
        <ul className="nav-list ps-0">
          <li>
            <Link key="0" to="/" onClick={() => setActive("0")}>
              <i
                className={isActive === '0' ? "bi bi-house text-muted active" : "bi bi-house text-muted"}
              ></i>
              <span className={isActive === '0' ? "links_name text-muted active" : "links_name text-muted"}>
                Inicio
              </span>
            </Link>
          </li>
          <li>
            <Link key="1" to="/admin" onClick={() => setActive('1')}>
              <i
                className={
                  isActive === '1' ? "bi bi-speedometer2 text-muted active" : "bi bi-speedometer2 text-muted"
                }
              ></i>
              <span className={isActive === '1' ? "links_name text-muted active" : "links_name text-muted"}>
                Dashboard
              </span>
            </Link>
          </li>
          <li id="sidebarMenu" onClick={() => setActive('3')}>
            <Link
              key="3"         
              to="/CMS/noticias"
              role="button"
              aria-controls="cmsDropdown"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <i
                className={
                  isActive === '3'
                    ? "bi bi-book text-muted active"
                    : "bi bi-book text-muted"
                }
              ></i>
              <span
                className={
                  isActive === '3'
                    ? "links_name text-muted active"
                    : "links_name text-muted"
                }
              >
                CMS
              </span>
            </Link>
            <Collapse in={open}>
              <ul className="sidebar-menu list-unstyled" id="cmsDropdown">
                  {listOptions.map((option, index) =>
                        <li  key={index}  onClick={() => setActiveLink(index)}>
                        <Link
                          className={`"sidebar-link text-muted" 
                           ${activeLink === index
                              ? "sidebar-link text-muted active"
                              : ""
                          }`}
                          to={option.route}
                        >
                         {option.text}
                        </Link>
                      </li>
                  )}
               {/*  <li>
                  <Link
                    key="0"
                    className={
                      isActive === '0'
                        ? "sidebar-link text-muted active"
                        : "sidebar-link text-muted"
                    }
                    to="/CMS/noticias"
                    onClick={() => setActive('0')}
                  >
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link
                  key="1"
                    className={
                      isActive === '1'
                        ? "sidebar-link text-muted active"
                        : "sidebar-link text-muted"
                    }
                    to="/CMS/agregarNoticia"
                    onClick={() => setActive('1')}
                  >
                    Agregar Noticia
                  </Link>
                </li>
                <li>
                  <Link
                    key="2"
                    className={
                      isActive === '2'
                        ? "sidebar-link text-muted active"
                        : "sidebar-link text-muted"
                    }
                    to="/CMS/categorias"
                    onClick={() => setActive('2')}
                  >
                    Categorias
                  </Link>
                </li> */}
              </ul>
            </Collapse>
          </li>
          <li>
            <Link key="7" to="/error404" onClick={() => setActive('7')}>
              <i className={isActive === '7' ? "bi bi-archive text-muted active" : "bi bi-archive text-muted"}></i>
              <span className={isActive === '7' ? "links_name text-muted active" : "links_name text-muted"}>Archivos</span>
            </Link>
          </li>
          <li>
            <Link key="8" to="/error404" onClick={() => setActive('8')}>
              <i className={isActive === '8' ? "bi bi-heart text-muted active" : "bi bi-heart text-muted"}></i>
              <span className={isActive === '8' ? "links_name text-muted active" : "links_name text-muted"}>Guardados</span>
            </Link>
          </li>
          <li>
            <Link key="9" to="/error404" onClick={() => setActive('9')}>
              <i className={isActive === '9' ? "bi bi-gear text-muted active" : "bi bi-gear text-muted"}></i>
              <span className={isActive === '9' ? "links_name text-muted active" : "links_name text-muted"}>Configuración</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
