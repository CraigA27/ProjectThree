import React from 'react';
import { Link } from 'react-router-dom';

const TrainerDetail = ({trainer}) => {


    const trainerColours = trainer.colours.map((colour, index) => {
        return(
            <option key={index} value={index}>{colour}</option>
        )
    })


    return(
        <>
        <Link to ="/"><button>Back</button></Link>

        <div className="trainer-details-container">
            <img className="trainer-details-image" src={trainer.image}/>

            <p>{trainer.name}</p>
            <p>{trainer.brand}</p>
            <p>£{trainer.price}</p>
            <p>Rating - {trainer.rating}</p>
            <p>Stock count: {trainer.quantityAvailable}</p>


            <form>
                <select className="trainer-colour-select">
                    {trainerColours}
                </select>
            </form>
        </div>
        </>
    )
}

export default TrainerDetail;