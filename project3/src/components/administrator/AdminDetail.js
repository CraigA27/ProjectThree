import React from 'react';
import Trainer from '../trainers/Trainer'
import './administrator.css'
import {Link} from 'react-router-dom';
import Request from '../../helpers/request';


const AdminDetail = ({trainers, administrator}) => {

    if(!administrator){
        return <p>
            Please login
        </p>
    }
    if(administrator.loggedin === false){
        return(
            <p>
                Please Login
            </p>
        )
    }

    const update = function(administrator){
        const request = new Request();
        const url = "/administrators/" + administrator.id;
        request.patch(url, administrator)
        .then(() => window.location = "/administrators")
    }

    const handleDelete = function(id){
        const request = new Request()
        const url = "/trainers/" + id
        request.delete(url)
        .then(() => window.location = "/administrators/admin")
    }

    const deleteTrainer = function(trainer){
        handleDelete(trainer.id)
    }

    const trainerNodes = trainers.map((trainer, index) => {
        return(
        <li key={index} className="administrator-trainer-item">
	        <div className="administrator-trainer-preview">
	            <Trainer trainer={trainer} />
                <button className="delete-trainer-button" onClick={() => deleteTrainer(trainer)}>Delete</button>
	        </div>
	    </li>
        )
    })

    const loggOut = function(){
        administrator.loggedIn = false;
        update(administrator)
    }

    const createUrl = "/administrators/new"

    const orderUrl ="/orders"
    return(
        
        <>
            
            <div className="admin-view">
                <div className="admin-button-links">
                <Link to = {createUrl}><button className="administrator-add-trainer">Add a new Trainer </button></Link>
                <Link to={orderUrl}><button className="view-order-button">View Recent Orders</button></Link>
                <button className="logout-button" onClick={loggOut}>Log out</button>
                </div>
                
                <div className="administrator-trainer-nodes">
                    {trainerNodes}
                </div>
            </div>
            
            
        </>
    )
}

export default AdminDetail;

