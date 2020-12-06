import React from 'react';
import CustomerForm from './CustomerForm';

const CustomerDetail = ({customer, onUpdate}) => {

    if(!customer){
        return <p>Loading....</p>
    }
    return(
        <>
        <h1>{customer.name}</h1>
        <img src={customer.avatar} className="customer-avatar"></img>
        {console.log(customer)}
        <CustomerForm />
        </>
    )
}

export default CustomerDetail;