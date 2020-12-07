import React from 'react'
import { Link } from 'react-router-dom'
import Request from '../../helpers/request'
import Trainer from '../trainers/Trainer'
import './cart.css'
import Checkout from '../payment/Checkout'

const CustomerCart = ({customer}) => {



    if(!customer){
        return <p>
            Please Login
        </p>
    }

    
    else if(customer.cart.length === 0){
        return <p>
            Cart Currently empty 	&#128546;
        </p>
    }

    const onChange = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers/cart")
    }

    const customerTrainerNodes = customer.cart.map((trainer, index) => {
        return(
            <li key={index} className="cart-item">
                <div className="cart-item">
                    <Trainer trainer={trainer} />
                    <button onClick={() => {deleteFromCart(trainer)}}>Remove from cart</button>
                </div>
            </li>
            )
    })

    const deleteFromCart = function(trainer){
        const index = customer.cart.indexOf(trainer)
        customer.cart.splice(index, 1);
        onChange(customer);
    }

    const price = customer.cart.map((trainer, index) => {
        return trainer.price;
    })
      
    const subtotal = price.reduce((currentSum, firstSum) => {
        return currentSum + firstSum
    }, 0)

    

    return(
        <>
                <Link to ="/"><button>Continue Shopping</button></Link>
                <h1>
                    Your Cart:
                </h1>

                <h3>Checkout: <Checkout customer={customer} price={subtotal}/></h3>
                <ul className="cart-list"> 
                    {customerTrainerNodes}
                
                </ul>
                <h1>
                    SubTotal: £{subtotal.toFixed(2)}
                </h1>
            

            {console.log(customer.cart)} 
            {console.log(price)}
        </>
    )

}

export default CustomerCart;