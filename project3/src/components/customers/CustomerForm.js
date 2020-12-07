import React, {useState, useEffect} from 'react';
import Request from '../../helpers/request';
import './CustomerSignUp.css'

const CustomerForm = ({customer, onCreate, onUpdate}) => {

    const onChange = function(customer){
        const request = new Request();
        const url = "/customers/" + customer.id;
        request.patch(url, customer)
        .then(() => window.location = "/customers/" + customer.id)
    }

    const [stateCustomer, setStateCustomer] = useState(
        {
            name: "",
            email: "",
            passWord: "",
            avatar: "",
            loggedIn: false
        }
    )

    useEffect(() => {
        if(customer){
            let currentCustomer = {...customer}
            setStateCustomer(currentCustomer);
        }
    }, [customer])

    
    let heading = "";
    let buttonText = "";

    if(!customer){
        heading = "Create A New Account"
        buttonText ="Create Account"
    } else {
        heading = "Edit Account Details"
        buttonText ="Update Account"
    }


    const handleChange = function(event){
        let propertyName = event.target.name;
        let Input = {...stateCustomer}
        Input[propertyName] = event.target.value;
        Input.loggedIn = true;
        setStateCustomer(Input);
    }

    const handleSubmit = function(event){
        event.preventDefault();
        if(stateCustomer.id){
            onChange(stateCustomer)
        } else {
            onCreate(stateCustomer)
        }
    }

    return(
        <>
        <h3>{heading}</h3>
        <form onSubmit={handleSubmit} className="container">
            <label>Name</label>
            <input type ="text" placeholder="enter your name" name="name" onChange={handleChange} value={stateCustomer.name} required autoComplete="off" />
            <label>Email</label>
            <input type ="text" placeholder="enter your email" name="email" onChange={handleChange} value={stateCustomer.email} required autoComplete="off" />
            <label>Password</label>
            <input type ="text" placeholder="enter your password" name="passWord" onChange={handleChange} value={stateCustomer.passWord} required autoComplete="off"/>
            <button type="submit" className="signup-button">{buttonText}</button>
        </form>
        </>
    )
}

export default CustomerForm;