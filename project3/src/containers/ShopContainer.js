import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from "../helpers/request";
import ShopBox from "../components/ShopBox"
import TrainerDetail from "../components/trainers/TrainerDetail";
import TrainerList from '../components/trainers/TrainerList';
import CustomerBox from "../components/CustomerBox"
import CustomerDetail from "../components/customers/CustomerDetail.js"
import CustomerForm from '../components/customers/CustomerForm';
import CustomerCart from "../components/customers/CustomerCart";
import AdminLogin from "../components/administrator/AdminLogin";
import AdminDetail from '../components/administrator/AdminDetail';
import AdminTrainer from '../components/administrator/AdminTrainer';
import OrderList from '../components/orders/OrderList'


const ShopContainer = () => {

    const [trainers, setTrainers] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [administrators, setAdministrator] = useState([]);
    const [orders, setOrders] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const trainerPromise = request.get('/trainers')
        const customerPromise = request.get('/customers')
        const administratorPromise = request.get('/administrators')
        const ordersPromise = request.get("/orders")

        Promise.all([trainerPromise, customerPromise, administratorPromise, ordersPromise])
        .then((data) => {
        setTrainers(data[0])
        setCustomers(data[1])
        setAdministrator(data[2])
        setOrders(data[3])
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

    const customerLoggedIn = customers.filter((customer) => {
        return customer.loggedIn === true;
    })

    const handleDelete = function(id){
        const request = new Request();
        const url = "/orders/" + id
        request.delete(url)
        .then(() => window.location = "/orders")
      }
    

    const handleCustomerPost = function(customer){
        const request = new Request();
        request.post("/customers", customer)
        .then(() => window.location = "/customers/account")
    }

    const handleTrainerPost = function(trainer){
        const request = new Request();
        request.post("/trainers", trainer)
        .then(() => {
            window.location = "/administrators/admin"
        })
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


            <Route exact path="/customers/new" render={() => {
                return <CustomerForm onCreate={handleCustomerPost} />
            }} />

                <Route exact path = "/customers/account" render= {() => {
                return <CustomerDetail  customer = {customerLoggedIn[0]}
                onUpdate={handleCustomerUpdate}/>
                }}/>

            <Route exact path = "/customers/cart" render= {() => {
                return <CustomerCart  customer = {customerLoggedIn[0]}/>
                }}/>

            <Route exact path = "/customers/:id" render={(props) => {
                const id = props.match.params.id
                const customer = findCustomerById(id)
                return <CustomerDetail
                 customer={customer}
                 onUpdate={handleCustomerUpdate} />
            }} />



            <Route exact path="/customers/:id/edit" render={(props) => {
                const id = props.match.params.id;
                const customer = findCustomerById(id);
                return <CustomerForm customer={customer} onUpdate={handleCustomerUpdate} />
            }} />

            <Route exact path="/customers" render={() => {
                return <CustomerBox customers={customers} />
            }} />

            <Route exact path ="/administrators/new" render ={() => {
                return <AdminTrainer 
                    administrator = {administrators[0]}
                    trainers = {trainers}
                    
                />
            }} />
            
            <Route exact path = "/administrators/admin" render={() => {
                const administrator = administrators[0]
                return <AdminDetail
                 administrator={administrator}
                 trainers = {trainers}
                 />
            }} />
            

            <Route exact path = "/administrators" render={() => {
                return <AdminLogin administrator={administrators[0]} />
            }} />

            <Route exact path = "/orders" render={() => {
                return <OrderList administrator={administrators[0]} orders = {orders}
                onDelete = {handleDelete}
                />
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