import React, { useState } from 'react';
import Order from './Order';
import { Link } from 'react-router-dom';
import './adminOrder.css'


const OrderList = ({orders, administrator, onDelete}) => {

    const [filter, setFilter] = useState("")

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
                <button onClick={() => {cancelOrder(order)}}className="buy-again">Cancel Order</button>
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
            
            {orderNodes}
        </div>
            
        

        </>
    )
}

export default OrderList;