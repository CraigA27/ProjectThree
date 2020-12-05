import React from 'react';
import { Link } from 'react-router-dom';

const Trainer = ({trainer}) => {

    if(!trainer){
        return "Loading..."
    }

    const url = "/trainers/" + trainer.id

    return(
        <>
            <Link to = {url}><img className="trainer-preview-image" src={trainer.image} /></Link>
            <p> {trainer.name}</p>
            <p> £{trainer.price}</p>
        </>
    )


}

export default Trainer;