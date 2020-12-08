import React, { useState } from 'react';
import Order from './Order';
import { Link } from 'react-router-dom';
import './adminOrder.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";


const OrderList = ({orders, administrator, onDelete}) => {

    const [filter, setFilter] = useState("")

    const close = <FontAwesomeIcon icon={faTimes} />

    const filterdOrders = orders.filter((order) => {
        return order.customer.email.toLowerCase().includes(filter.toLocaleLowerCase())
    })

    const cancelOrder = function(order){
        onDelete(order.id)
    }

    const orderNodes = filterdOrders.map((order, index) =>{
        return(
            <li key={index} className="order-details" >
	        <div >
	            <Order order={order} />
        <button onClick={() => {cancelOrder(order)}}className="buy-again">Cancel Order &nbsp; &nbsp; <i>{close}</i></button>
	        </div>
	     </li>
        )
    })
    return(

        <>
        <div className="administrator-recent-orders">
            <input 
            type="search"
            placeholder="Search by Customer Email"
            onChange={(e) => {setFilter(e.target.value)}}
            className="search-bar"/>
            <div className="order-nodes">
            {orderNodes}
            </div>
            
        </div>
            
        

        </>
    )
}

export default OrderList;