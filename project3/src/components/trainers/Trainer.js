import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

const Trainer = ({trainer}) => {

    if(!trainer){
        return "Loading..."
    }

    const url = "/trainers/" + trainer.id


    return(
        <>
        <div className="trainer">
        <Link to = {url}><img className="trainer-preview-image" src={trainer.image} /></Link>
            <p className="trainer-name"> {trainer.name}</p>
            <p className="trainer-price"> £{trainer.price}</p>
        </div>
            
        </>
    )


}

export default Trainer;