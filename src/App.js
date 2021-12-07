import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/common/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navigation></Navigation>
      </Router>
  );
};

export default App;