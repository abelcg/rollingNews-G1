import "./App.css";
import React from "react";
import Navigation from "./components/common/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import PaginaPrincipal from './components/pages/PaginaPrincipal/PaginaPrincipal';
import "bootstrap/dist/css/bootstrap.min.css";
import SobreNosotros from "./components/pages/SobreNosotros";
import Error404 from "./components/pages/Error404";
import Contacto from "./components/pages/Contacto";
import AdminPage from "./components/pages/AdminPage";


const App = () => {
  return (
      <Router>
        <Navigation></Navigation>
        <main>
         <Routes>
          <Route exact path='/inicio' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
        </Routes>
         <Routes>
          <Route exact path='/acercadenosotros' element={<SobreNosotros></SobreNosotros>}></Route>
        </Routes>
         <Routes>
          <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        </Routes>
         <Routes>
          <Route exact path='/error404' element={<Error404></Error404>}></Route>
        </Routes>
         <Routes>
          <Route exact path='/admin' element={<AdminPage></AdminPage>}></Route>
        </Routes>
        </main>
        <Footer></Footer>
      </Router>
  );
};

export default App;

