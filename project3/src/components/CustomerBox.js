import React, { useState } from 'react';
import Request from '../helpers/request';
import {Link} from 'react-router-dom';
import "../Styling/Login.css"
import './customers/CustomerSignUp.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const CustomerBox = ({customers}) => {

    const [userInput, setUserInput] = useState({
        email: "",
        passWord: ""
    });

    const [showPassWord, setShowPassWord] = useState(false);

    const eyeIcon = <FontAwesomeIcon icon={faEye} />;
    const eyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} />;


    // const checkLogInDetails

    const handleChange = function(event){
        let propertyName = event.target.name;
        let Input = {...userInput}
        Input[propertyName] = event.target.value;
        setUserInput(Input);
    }

    const onUpdate = function(customer){
        const request = new Request();
        const url = "/api/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers/" + customer.id)
    }

    const handleSubmit = function(event){
        event.preventDefault();
        let input = {...userInput}
        const index = customers.findIndex((customer) => {
            return customer.email === input.email
        })

        if(index === -1 ){
            const request = new Request();
            const url = "/customers";
            request.get(url)
            .then(() => window.location = "/customers")
        }
        else{
            if(input.passWord === customers[index].passWord){
                let customer = {...customers[index]}
                customer.loggedIn = true 
                onUpdate(customer);
            }

            
            else{
                const request = new Request();
                const url = "/customers";
                request.get(url)
                .then(() => window.location = "/customers")
            }
        }

        // console.log(customers[index].name);

    }

    let display = eyeIcon
        if(!showPassWord === false){
            display = eyeSlashIcon
        }

    const togglePassWordVisibility = () => {
        setShowPassWord(showPassWord ? false : true);
    }



    



    const createUrl = "/customers/new"


    return(
        <>
        
        <form onSubmit={handleSubmit} className="login">
            <label className="login-label">Email address</label>
            <input type="text" placeholder="enter email" name="email" required onChange={handleChange} value={userInput.email} autoComplete="off" />

            <label className="login-label">Password</label>
            <input type={showPassWord ? "text" : "password"} placeholder="enter password" name="passWord" required onChange={handleChange} value={userInput.passWord} autoComplete="off" />
            <i onClick={togglePassWordVisibility}>{display}</i>
            <button type="submit" className="login-button">Sign-In</button>
            <p>Don't have an account? Sign up!</p>
            <Link to={createUrl} ><button type="button" className="signup-button">Create Account</button></Link>
            
        </form>
        
       

        
        </>

        
    )
}

export default CustomerBox;