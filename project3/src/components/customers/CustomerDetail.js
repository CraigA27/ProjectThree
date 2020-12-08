import React from 'react';

import { Link } from 'react-router-dom';
import Request from '../../helpers/request';
import CustomerBox from '../CustomerBox';
import CustomerOrder from './CustomerOrder';
import './order.css'
import './customer.css'



    
    

const CustomerDetail = ({customer, onUpdate}) => {

    if(!customer){
        return <p className="login-message">
            Please Sign in to View Your Account Details
        </p>
    }

    const onChange = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers")
    }


    const logOut = function(){
        customer.loggedIn = false;
        onChange(customer)
    }

    const onBuy = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers/cart")
    }

    const addToCart = function(shoes){
        for(let shoe of shoes){
            customer.cart.push(shoe)
        }
        onBuy(customer);
    }

    



    const orderNodes = customer.previousOrders.map((order, index) =>{
        return(
            <li key={index} className="order-details" >
	        <div >
	            <CustomerOrder order={order} />
                <button onClick={() => {addToCart(order.shoes)}}className="buy-again">Buy Again</button>
	        </div>
	     </li>
        )
    })


    



    const editUrl = "/customers/" + customer.id + "/edit" 
    return(
        <>
        <div className="customer-container">
            <h1>{customer.name}</h1>
            <img src={customer.avatar} className="customer-avatar"></img>
            <div className="customer-button-container">
                <Link to ={"/"} customer={customer}><button className="customer-button">Go Shopping</button></Link>
                <Link to={editUrl}><button type="button" className="customer-button">Edit Account</button></Link>
                <button className="customer-button" onClick={logOut}>Sign out</button>
            </div>
        </div>

            <h1 className="order-history-title">Order History</h1>   
            {orderNodes}

    

        

        </>
    )
}

export default CustomerDetail;