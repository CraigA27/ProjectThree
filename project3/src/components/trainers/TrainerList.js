import React from "react";
import Trainer from "./Trainer"
// import "."
import './Homepage.css'


const TrainerList = ({trainers}) => {

    const trainerNodes = trainers.map((trainer, index) => {
        return(
        <li key={index} className="trainer-item">
	        <div className="trainer-preview">
	            <Trainer trainer={trainer} />
	        </div>
	    </li>
        )
    })



    return(
        
        <>
       

        <ul className="trainer-nodes">
         {trainerNodes}
        </ul>
        </>
    )


}

export default TrainerList;