import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ShopContainer from './ShopContainer';

const MainContainer = () => {
    return(
        <Router>
        <div className="app">
        <NavBar/>
        <Switch>
        <Route path="/" component={ShopContainer} />
        </Switch>
        </div>
        </Router>
    )
    
}

export default MainContainer;