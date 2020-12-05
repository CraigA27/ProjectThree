import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import TrainerContainer from './TrainerContainer';

const MainContainer = () => {
    return(
        <Router>
        <>
        <NavBar/>
        <Switch>
        <Route path="/trainers" component={TrainerContainer} />
        </Switch>
        </>
        </Router>
    )
    
}

export default MainContainer;