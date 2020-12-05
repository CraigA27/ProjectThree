import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from "../helpers/request";
import ShopBox from "../components/ShopBox"
import TrainerDetail from "../components/trainers/TrainerDetail";
import TrainerList from '../components/trainers/TrainerList';
import CustomerBox from "../components/CustomerBox"

const ShopContainer = () => {

    const [trainers, setTrainers] = useState([]);
    const [customers, setCustomers] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const trainerPromise = request.get('/trainers')
        const customerPromise = request.get('/customers')

        Promise.all([trainerPromise, customerPromise])
        .then((data) => {
        setTrainers(data[0])
        setCustomers(data[1])
        })
    }

    const findTrainerById = function(id){
        return trainers.find((trainer) => {
            return trainer.id === parseInt(id)
        })
    }

    useEffect(() => {
        requestAll()
    }, [])
    
    return(
        <Router>
            <>
            <Switch>

            <Route exact path="/trainers/:id" render={(props) => {
                const id = props.match.params.id
                const trainer = findTrainerById(id)
                return <TrainerDetail trainer={trainer} />
            }} />

            <Route exact path="/customer" render={() => {
                return <CustomerBox customers={customers} />
            }} />

            <Route render={() => {
                return <ShopBox trainers={trainers} />
            }} />

           

            </Switch>
            </>
        </Router>
    )
}

export default ShopContainer;