import React from 'react';
import {Link} from 'react-router-dom';
const CustomerDetail = ({customer, onUpdate}) => {

    if(!customer){
        return <p>Loading....</p>
    }

    const editUrl = "/customers/" + customer.id + "/edit" 
    return(
        <>
        <h1>{customer.name}</h1>
        <img src={customer.avatar} className="customer-avatar"></img>
        {console.log(customer)}
        <Link to={editUrl}><button type="button">Edit Account</button></Link>

        </>
    )
}

export default CustomerDetail;