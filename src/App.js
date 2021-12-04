import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Navbar from './components/site/Navbar'
import Home from './components/site/Home'
import {
  BrowserRouter as Router 
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Router>
        <Navbar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
