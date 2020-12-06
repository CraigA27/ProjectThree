import React from 'react';
import { Link } from 'react-router-dom';
import Request from '../../helpers/request';

const CustomerDetail = ({customer}) => {


    const onUpdate = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers")
    }


    const logOut = function(){
        customer.loggedIn = false;
        onUpdate(customer)
    }
    
    if(!customer){
        return <p>Loading....</p>
    }
    return(
        <>
        <h1>{customer.name}</h1>
        <img src={customer.avatar} className="customer-avatar"></img>
        <button onClick={logOut}>Log out</button>
        <Link to ={"/"} customer={customer}><button>Go shopping</button></Link>
         
        </>
    )
}

export default CustomerDetail;