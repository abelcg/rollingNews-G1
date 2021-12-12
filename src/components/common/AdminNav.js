import React, { useState } from "react";
import "../css/admin.css";
import { Nav, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";

const AdminNav = () => {
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Nav
          className="
          px-4
          py-2
          shadow
          navbar navbar-expand-lg
          bg-white
          overflow-hidden
         
        "
        >
          <Container className="d-flex justify-content-between aling-items-center">
            <button
              className="btn p-0 "
              onClick={() => handleToggle()}
            >
              <box-icon name={(clicked) ? "menu" : "menu-alt-left"} id="btn"></box-icon>
            </button>
            <h2 className="navbar-brand" style={{ color: "#4650dd" }}>
              Dashboard
            </h2>
            <button
              className="btn"
              type="button"
             
            >
              <box-icon name="log-out"></box-icon>
            </button>
          </Container>
        </Nav>
      </header>
      <Sidebar clicked={clicked}></Sidebar>
    </>
  );
};

export default AdminNav;
