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


    const onUpdate = function(customer){
        const request = new Request();
        const url = "/customer/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customer/" + customer.id)
    }

    const handleSubmit = function(event){
        event.preventDefault();
        let input = {...userInput}
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
                customers[index].loggedIn = true;
                onUpdate(customers[index]);
            }

            else{
                const request = new Request();
                const url = "/customer";
                request.get(url)
                .then(() => window.location = "/customer")
            }
        }


      

        

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