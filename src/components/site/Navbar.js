import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import YourRecipes from './YourRecipes'
import TrendingRecipes from './TrendingRecipes';
import SignUp from './SignUp';
import Login from './Login';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-list-styling'>
                <ul className='navbar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                    <li><Link to='/yourrecipes'>Your Recipes</Link></li>
                    <li><Link to='/trendingrecipes'>Trending Recipes</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </div>
            <div className='navbar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/favorites'><Favorites /></Route>
                    <Route exact path='/yourrecipes'><YourRecipes /></Route>
                    <Route exact path='/trendingrecipes'><TrendingRecipes /></Route>
                    <Route exact path='/signup'><SignUp /></Route>
                    <Route exact path='/login'><Login /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Navbar;