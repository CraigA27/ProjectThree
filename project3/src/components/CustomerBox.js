import React, { useState } from 'react';
import Request from '../helpers/request';
import "../Styling/Login.css"

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
        
        <form onSubmit={handleSubmit} className="login">
            <label className="login-label">Email address</label>
            <input type="text" placeholder="enter email" name="email" onChange={handleChange} value={userInput.email} autoComplete="off" />

            <label className="login-label">Password</label>
            <input type="text" placeholder="enter password" name="passWord" onChange={handleChange} value={userInput.passWord} autoComplete="off"/>
            <button type="submit" className="submit-button">Log-in</button>
        </form>
        </>
    )
}

export default CustomerBox;