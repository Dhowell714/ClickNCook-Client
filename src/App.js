import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sitebar from './components/site/Navbar'
import Home from './components/site/Home'
// import Auth from './components/site/Auth'
import {
  BrowserRouter as Router 
} from 'react-router-dom';
import RecipeIndex from './Recipes/RecipeIndex';
function App() {

  const [sessionToken, setSessionToken] = useState('');

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <RecipeIndex token={sessionToken}/>
    : <Sitebar updateToken={updateToken}/>)
  }

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const clearToken = () => {
    console.log("clickLogout")
    localStorage.clear();
    setSessionToken('');
  }

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  return (
    <div className="App">
      <Header />
      <Home />
     {/* <Auth /> */}
      <Router>
        <Sitebar clickLogout={clearToken} updateToken={updateToken}  />
      </Router>
      <Footer />
      
    </div>
  );
};

export default App;
