import React from 'react';
import { Link } from 'react-router-dom';
import './order.css'


const CustomerOrder = ({order}) => {
    

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
            <p>Date: {order.date}</p>
            <p>Amount Spent: £{orderTotal}</p>
            <p className="trainer-order-image">Trainers Purchased: {orderNames} </p>
             

        </>
    )
    
}

export default CustomerOrder;