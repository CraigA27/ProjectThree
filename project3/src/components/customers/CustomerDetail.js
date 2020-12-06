import React from 'react';
<<<<<<< HEAD
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
    
=======
import {Link} from 'react-router-dom';
const CustomerDetail = ({customer, onUpdate}) => {

>>>>>>> b2fb3c666c9a575d99c733c13ab9959973c016c2
    if(!customer){
        return <p>Loading....</p>
    }

    const editUrl = "/customers/" + customer.id + "/edit" 
    return(
        <>
        <h1>{customer.name}</h1>
        <img src={customer.avatar} className="customer-avatar"></img>
<<<<<<< HEAD
        <button onClick={logOut}>Log out</button>
        <Link to ={"/"} customer={customer}><button>Go shopping</button></Link>
         
=======
        {console.log(customer)}
        <Link to={editUrl}><button type="button">Edit Account</button></Link>

>>>>>>> b2fb3c666c9a575d99c733c13ab9959973c016c2
        </>
    )
}

export default CustomerDetail;