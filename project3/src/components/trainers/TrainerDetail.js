import React from 'react';
import { Link } from 'react-router-dom';
import Request from '../../helpers/request';

const TrainerDetail = ({trainer, customer}) => {

    if(!trainer){
        return <p>
            Loading
        </p>
    }


    const trainerColours = trainer.colours.map((colour, index) => {
        return(
            <option key={index} value={index}>{colour}</option>
        )
    })

    const onUpdate = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => console.log(customer.cart))
    }

    const addTrainerToCart = function(){
        customer.cart.push(trainer);
        onUpdate(customer);
    }


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

            <button onClick={addTrainerToCart}>Add to card</button>
           {console.log(customer)}
        </div>
        </>
    )
}

export default TrainerDetail;