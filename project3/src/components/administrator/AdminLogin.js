import React, {useState} from 'react'

import {Link} from 'react-router-dom';
// import "../Styling/Login.css"
// import './customers/CustomerSignUp.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Request from '../../helpers/request';

const AdminLogin = ({administrator}) => {

    const [userInput, setUserInput] = useState({
        username: "",
        passWord: ""
    });

    const [showPassWord, setShowPassWord] = useState(false);


    if(!administrator){
        return(
            <p>
                Loading
            </p>
        )
    }
    else if(administrator.loggedIn){
        return(
            window.location = "/administrators/admin"
        )
    }

   

    const eyeIcon = <FontAwesomeIcon icon={faEye} />;
    const eyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} />;


    const handleChange = function(event){
        let propertyName = event.target.name;
        let Input = {...userInput}
        Input[propertyName] = event.target.value;
        {console.log(Input.username)}
        {console.log(Input.passWord)}
        // {console.log(administrator.username)}
        // {console.log(administrator.passWord)}
        setUserInput(Input);
    }

    const onUpdate = function(administrator){
        const request = new Request();
        const url = "/api/administrators/" + administrator.id;
        request.patch(url, administrator)
        .then(() => window.location = "/administrators/admin")
    }

    let display = eyeIcon
    if(!showPassWord === false){
        display = eyeSlashIcon
    }

    const togglePassWordVisibility = () => {
        setShowPassWord(showPassWord ? false : true);
    }


    const handleSubmit = function(event){
        event.preventDefault();
        let input = {...userInput}

        if(input.username === administrator.username && input.passWord === administrator.password){
            administrator.loggedIn = true;
            onUpdate(administrator)
            
        }
        else{
            const request = new Request();
            const url = "/administrators";
            request.get(url)
            .then(() => window.location = "/administrators")
            
        }
        
    }

    return(

        <>
            <h1 className="admin-login-header">Administrative Login</h1>
            <form onSubmit={handleSubmit} className="admin-login">
                <label className="login-label">Username</label>
                <input type="text" placeholder="Username" name="username" required onChange={handleChange} value={userInput.username} autoComplete="off" />

                <label className="login-label">Password</label>
                <input type={showPassWord ? "text" : "password"} placeholder="enter password" name="passWord" required onChange={handleChange} value={userInput.passWord} autoComplete="off" />
                <i onClick={togglePassWordVisibility}>{display}</i>
                <button type="submit" className="login-button">Log-in</button>
        </form>
        </>
    )

}

export default AdminLogin;