import React from 'react'
import { Link } from 'react-router-dom'
import Request from '../../helpers/request'
import Trainer from '../trainers/Trainer'
import './cart.css'
import Checkout from '../payment/Checkout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash  } from "@fortawesome/free-solid-svg-icons";




const CustomerCart = ({customer}) => {

    const trash = <FontAwesomeIcon icon={faTrash} />
    

    if(!customer){
        return <p className="login-message">
            Please Sign in to View Your Cart
        </p>
    }

    
    else if(customer.cart.length === 0){
        return <h1 className="cart-empty">
            Cart Currently Empty 	&#128546;
        </h1>
    }

    const onChange = function(customer){
        const request = new Request();
        const url = "/api/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers/cart")
    }

    const customerTrainerNodes = customer.cart.map((trainer, index) => {
        return(
            <li key={index} className="cart-item">
                <div className="cart-item">
                    <Trainer trainer={trainer} />
                   
                    <button className="remove-button" onClick={() => {deleteFromCart(trainer)}}>Remove from Cart <i>{trash}</i></button>
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
                <Link to ="/"><button className="back-button">Continue Shopping</button></Link>
                <h1 className="total-message">
                    SubTotal: £{subtotal.toFixed(2)}
                </h1>
               

                <h3 className="checkout-message">Checkout: &nbsp; <Checkout customer={customer} price={subtotal}/></h3>
                <ul className="cart-list"> 
                    {customerTrainerNodes}
                
                </ul>
                {/* <h1 className="total-message">
                    SubTotal: £{subtotal.toFixed(2)}
                </h1> */}
            

            {console.log(customer.cart)} 
            {console.log(price)}
        </>
    )

}

export default CustomerCart;