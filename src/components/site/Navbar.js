import React, { useState } from 'react';
import {Button, Navbar, 
        }
 from 'reactstrap';
import {
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import YourRecipes from './YourRecipes'
import TrendingRecipes from './TrendingRecipes';
import SignUp from './SignUp';
import Login from './Login';
import Categories from './Categories';
import NewRecipes from '../../Recipes/NewRecipes';


const Sitebar = (props) => {

    
    return(
        <div className='navbar'>
            <div className='navbar-list-styling'>
                <ul className='navbar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                    <li><Link to='/newrecipes'>New Recipe</Link></li>
                    <li><Link to='/yourrecipes'>Your Recipes</Link></li>
                    <li><Link to='/trendingrecipes'>Trending Recipes</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                    <li><Link to='/categories'>Categories</Link></li>
                </ul>
            </div>
            <div className='navbar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/favorites'><Favorites /></Route>
                    <Route exact path='/newrecipes'><NewRecipes /></Route>
                    <Route exact path='/yourrecipes'><YourRecipes /></Route>
                    <Route exact path='/trendingrecipes'><TrendingRecipes /></Route>
                    <Route exact path='/signup'><SignUp updateToken={props.updateToken} /></Route>
                    <Route exact path='/login'><Login clickLogout={props.clickLogout} updateToken={props.updateToken} /></Route>
                    <Route exact parh='/categories'><Categories /></Route>
                </Switch>
            </div>
          
                
              
        </div>
        

    );
};

export default Sitebar;