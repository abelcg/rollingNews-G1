import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/common/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route exact path='/' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
