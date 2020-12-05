import React from 'react';

const CustomerDetail = ({customer}) => {
    
    if(!customer){
        return <p>Loading....</p>
    }
    return(
        <>
        <h1>{customer.name}</h1>
        <img src={customer.avatar} className="customer-avatar"></img>
        {console.log(customer)}
        </>
    )
}

export default CustomerDetail;