import React from 'react';

import { Link } from 'react-router-dom';
import Request from '../../helpers/request';
import CustomerBox from '../CustomerBox';



    
    

const CustomerDetail = ({customer, onUpdate}) => {

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


    if(!customer){
        return <p>
            Login to View Your Details
        </p>
    }



    const editUrl = "/customers/" + customer.id + "/edit" 
    return(
        <>
        <h1>{customer.name}</h1>
        <img src={customer.avatar} className="customer-avatar"></img>

        <button onClick={logOut}>Log out</button>
        <Link to ={"/"} customer={customer}><button>Go shopping</button></Link>
         

        {console.log(customer)}
        <Link to={editUrl}><button type="button">Edit Account</button></Link>


        </>
    )
}

export default CustomerDetail;