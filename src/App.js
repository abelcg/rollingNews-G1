import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/common/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <Router>
      <Navigation></Navigation>
      <Footer></Footer>
      </Router>
  );
};

export default App;