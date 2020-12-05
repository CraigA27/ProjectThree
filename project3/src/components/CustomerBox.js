import React, { useState } from 'react';
import Request from '../helpers/request';

const CustomerBox = ({customers}) => {

    const [userInput, setUserInput] = useState({
        email: "",
        passWord: ""
    })

    // const checkLogInDetails

    const handleChange = function(event){
        let propertyName = event.target.name;
        let Input = {...userInput}
        Input[propertyName] = event.target.value;
        setUserInput(Input);
    }

    const handleSubmit = function(event){
        event.preventDefault();
        let input = {... userInput}
        const index = customers.findIndex((customer) => {
            return customer.email === input.email
        })

        if(index === -1 ){
            const request = new Request();
            const url = "/customer";
            request.get(url)
            .then(() => window.location = "/customer")
        }
        else{
            if(input.passWord === customers[index].passWord){
                const updatedRequest = new Request()
                const id = customers[index].id
                const url = "/customer/" + id
                updatedRequest.get(url)
                .then(() => window.location = "/customer/" + id )

            }
            else{
                const request = new Request();
                const url = "/customer";
                request.get(url)
                .then(() => window.location = "/customer")
            }
        }

        console.log(customers[index].name);

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter email" name="email" onChange={handleChange} value={userInput.email} autoComplete="off" />
            <input type="text" placeholder="enter password" name="passWord" onChange={handleChange} value={userInput.passWord} autoComplete="off"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default CustomerBox;