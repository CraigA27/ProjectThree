import React, { useState } from "react";
import TrainerList from "./trainers/TrainerList"
import './trainers/Homepage.css'


const ShopBox = ({trainers, customers}) => {

    const [filter, setFilter] = useState("");

    const filteredTrainers = trainers.filter((trainer) => {
        return trainer.brand.toLowerCase().includes(filter.toLowerCase())
    })


    return(

        <>
        <input 
        type="search"
        placeholder="Search by brand"
        onChange={(e) => {setFilter(e.target.value)}}
        className="search-bar"/>
        <TrainerList trainers={filteredTrainers} />
        </>
    )



}

export default ShopBox;