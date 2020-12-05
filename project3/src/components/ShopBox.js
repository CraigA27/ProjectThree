import React, { useState } from "react";
import TrainerList from "./trainers/TrainerList"


const ShopBox = ({trainers, customers}) => {

    const [filter, setFilter] = useState("");

    const filteredTrainers = trainers.filter((trainer) => {
        return trainer.brand.toLowerCase().includes(filter.toLowerCase())
    })

    const handleChange = (e) => {
        let propertyFilter = e.target.value;
        let copiedFilter = {...filter};
        copiedFilter = propertyFilter;
        setFilter(copiedFilter);
    }

    return(

        <>
        <input 
        type="search"
        placeholder="Search by brand"
        onChange={(e) => {setFilter(e.target.value)}}
        />
        <TrainerList trainers={filteredTrainers} />
        </>
    )



}

export default ShopBox;