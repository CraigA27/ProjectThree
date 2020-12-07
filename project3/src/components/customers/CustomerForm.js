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

    const setAvatar = function(avatarLink){
        let input = {...stateCustomer}
        input.avatar = avatarLink;
        setStateCustomer(input);
    }

    return(
        <>
        <h3 className="heading">{heading}</h3>
        <form onSubmit={handleSubmit} className="container-login">
            <label>Name</label>
            <input type ="text" placeholder="enter your name" name="name" onChange={handleChange} value={stateCustomer.name} required autoComplete="off" />
            <label>Email</label>
            <input type ="text" placeholder="enter your email" name="email" onChange={handleChange} value={stateCustomer.email} required autoComplete="off" />
            <label>Password</label>
            <input type ="text" placeholder="enter your password" name="passWord" onChange={handleChange} value={stateCustomer.passWord} required autoComplete="off"/>
            
            <button type="submit" className="signup-button">{buttonText}</button>
        </form>
        
        <h3>Select an Avatar</h3>
        <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" onClick={() => {
                setAvatar("https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" )
            }} className="batman-avatar"></img>

        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" onClick={() => {setAvatar("https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png")}}></img>


        <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png" onClick={() => setAvatar("https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png")} className="green-avatar-female">
        </img>
        </>
    )
}

export default CustomerForm;