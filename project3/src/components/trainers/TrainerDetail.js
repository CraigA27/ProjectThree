import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Request from '../../helpers/request';
import './TrainerDetail.css'
import StarRatingComponent from 'react-star-rating-component';

const TrainerDetail = ({trainer, customer}) => {
    const [card, setCard] = useState({})
    const [sneaker, setSneaker] = useState({})
    const [name, setName] = useState({})


    useEffect(() => {
        if(trainer){
            const currentCard = document.querySelector(".card")
            setCard(currentCard)
            const currentSneaker = document.querySelector(".sneaker img")
            setSneaker(currentSneaker)
            const currentName = document.querySelector(".info h1")
            setName(currentName);
        }
        

    }, [card])
    

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
        if(customer){
            customer.cart.push(trainer);
            onUpdate(customer);
        }
        
    }



    const transform = function(e){
        let xAxis = (window.innerWidth / 2 - e.pageX) / 20
        let yAxis = (window.innerHeight / 2 - e.pageY) / 20

        
        if(card !== null){
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

        }
        
        
    }

    const animateOut = function(e){

        if(card != null){
            card.style.transition = 'all 0.5s ease';
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
            name.style.transform = "translateZ(0px)";
            sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"  
             
        }
        
        
    }

    const animateIn = function(e){

        if(card != null){
            card.style.transition = 'none';
            name.style.transform = "translateZ(150px)";
            sneaker.style.transform = "translateZ(250px)";
        }
        
        
    }


    return(
        <>
        <Link to ="/"><button>Back</button></Link>
        <div className="detail-body">
            <div className="container" onMouseMove={transform} onMouseLeave={animateOut} onMouseEnter={animateIn}>
                <div className="card" >
                    <div className="sneaker">
                        <div className="circle"></div>
                        <img src={trainer.image}/>
                    </div>
                    <div className="info">
                        <h1>{trainer.name}</h1>
                        <h3>{trainer.brand}</h3>
                        <p>£{trainer.price}</p>
                        <p>Rating: <StarRatingComponent 
                        editing={false}
                        isHalf={true}
                        starCount={5}
                        value={trainer.rating}
                        /></p>
                        {/* <button onClick={addTrainerToCart} className="purchase">Add to cart</button> */}
                    </div>
                </div>
            </div>
            <button onClick={addTrainerToCart} className="purchase">Add to cart</button>
        </div>
        </>
    )
}

export default TrainerDetail;