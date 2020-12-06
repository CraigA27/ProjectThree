import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from "../helpers/request";
import ShopBox from "../components/ShopBox"
import TrainerDetail from "../components/trainers/TrainerDetail";
import TrainerList from '../components/trainers/TrainerList';
import CustomerBox from "../components/CustomerBox"
import CustomerDetail from "../components/customers/CustomerDetail.js"
import CustomerForm from '../components/customers/CustomerForm';

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

    const findCustomerById = function(id){
        return customers.find((customer) => {
            return customer.id === parseInt(id)
        })
    }

    const handleCustomerPost = function(customer){
        const request = new Request();
        request.post("/customers", customer)
        .then(() => window.location = "/")
    }

    const handleCustomerUpdate = function(customer){
        const request = new Request();
        request.patch("/customers" + customer.id, customer)
        .then(() => window.location = "/customers/" + customer.id)
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
                return <TrainerDetail trainer={trainer} customer = {customerLoggedIn[0]} />
            }} />

            <Route exact path = "/customers/:id" render={(props) => {
                const id = props.match.params.id
                const customer = findCustomerById(id)
                return <CustomerDetail
                 customer={customer}
                 onUpdate={handleCustomerUpdate} />
            }} />

            
            <Route exact path="/customers/new" render={() => {
                return <CustomerForm onCreate={handleCustomerPost} />
            }} />

            <Route exact path="/customers/:id/edit" render={(props) => {
                const id = props.match.params.id;
                const customer = findCustomerById(id);
                return <CustomerForm customer={customer} onUpdate={handleCustomerUpdate} />
            }} />

            <Route exact path="/customers" render={() => {
                return <CustomerBox customers={customers} />
            }} />



            

            <Route render={() => {
                return <ShopBox trainers={trainers} customer = {customerLoggedIn[0]}/>
            }} />

            

           

            </Switch>
            </>
        </Router>
    )
}

export default ShopContainer;