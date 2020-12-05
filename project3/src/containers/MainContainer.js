import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ShopContainer from './ShopContainer';

const MainContainer = () => {
    return(
        <Router>
        <>
        <NavBar/>
        <Switch>
        <Route path="/" component={ShopContainer} />
        </Switch>
        </>
        </Router>
    )
    
}

export default MainContainer;