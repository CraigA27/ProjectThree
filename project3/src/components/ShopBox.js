import React from "react";
import TrainerList from "./trainers/TrainerList"

const ShopBox = ({trainers, customers}) => {


    return(
        <TrainerList trainers={trainers} />
    )



}

export default ShopBox;