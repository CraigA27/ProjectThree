import react from "react";
import React from 'react'
import { Link } from 'react-router-dom';

const Order = ({order}) => {

    const orderPrices = order.shoes.map((trainer, index) => {
        return trainer.price
    })

    const orderTotal = orderPrices.reduce((currentSum, totalSum) => {
        return currentSum + totalSum
    }, 0)

    const orderNames = order.shoes.map((trainer, index) => {
        const url = "/trainers/" + trainer.id
        return (<Link to={url}><img src={trainer.image} className="order-image"></img></Link>)
    })

    return(
        <>
            <p>Customer Name: {order.customer.name}</p>
            <p>Amount: £{orderTotal}</p>
            <p className="trainer-order-image">Trainers Purchased: &nbsp; &nbsp; {orderNames} </p>
        </>

      
    )

}

export default Order;