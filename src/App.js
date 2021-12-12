import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNav from './components/common/AdminNav'
import AdminFooter from './components/common/AdminFooter';
import AdminError404 from './components/pages/AdminError404';



function App() {
  return (
    <Router>
     <AdminNav></AdminNav>
     <main>
     <Routes>
     <Route exact path="/error404" element={<AdminError404></AdminError404>}></Route>
     </Routes>
     </main>
     <AdminFooter></AdminFooter>
    </Router>
  );
}

export default App;
