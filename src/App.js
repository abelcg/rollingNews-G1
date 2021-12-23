import "./App.css";
import React from "react";
import Navigation from "./components/common/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Footer from "./components/common/Footer";
//import PaginaPrincipal from './components/pages/PaginaPrincipal';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
      <Router>
        <Navigation></Navigation>
        {/* <Routes>
          <Route exact path='/' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
        </Routes>
        <Footer></Footer> */}
      </Router>
  );
};

export default App;
