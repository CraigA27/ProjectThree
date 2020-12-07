import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Request from '../../helpers/request';


const Checkout = ({customer, price}) => {
    const payCurrency = "GBP"

    const amount = price * 100;
    let currentDate = new Date();
    const [order, setOrder] = useState({
        date: currentDate.toLocaleDateString(),
        customer: customer,
        shoes: []
    })

    const onChange = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers/cart")
    }

    const onPost = function(order){
        const request = new Request();
        request.post("/orders", order)
        .then((order) => {customer.previousOrders.push(order)})
        .then(() => customer.cart = [])
        .then(() => onChange(customer))
    }

    const onToken = function(token, addresses){
        for(let trainer of customer.cart){
            order.shoes.push(trainer)
        }
        onPost(order)
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