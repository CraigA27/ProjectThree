import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Request from '../../helpers/request';


const Checkout = ({customer, price}) => {
    const payCurrency = "GBP"

    const amount = price * 100;

    const onChange = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers/cart")
    }

    const onToken = function(token, addresses){
        customer.cart = [];
        onChange(customer)
        console.log(token, addresses)
    }
    return(

        <StripeCheckout
    token={onToken}
    stripeKey={"pk_test_51HvdtALh3PhuFRKJPWIWfpKbaB2JUZSBstESiu7QN6f9oU6IKg5aJNxhDzbikCyqyai9t3VPdJfVpNRVGK3fqema00dgUL6WNm"}
    amount = {amount}
    currency = {payCurrency}
    />
    )
}

 
 
export default Checkout;