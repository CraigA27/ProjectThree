import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo1.png"

const NavBar = () => {
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const user = <FontAwesomeIcon icon={faUser} />
    const administrator = <FontAwesomeIcon icon={faSignInAlt} />
    return(
        <header className="nav-container">
            <div className="logo-container">
            <a href="/"><img src={logo} className="header-logo"/></a>
            </div>
                <ul className="nav-links">
                    <li className="navLink">
                      <a href="/administrators"><i>{administrator}</i></a>  
                    </li>  
                    <li className="navLink">
                        <a href="/customers">Sign In / Create Account</a>
                    </li>
                    <li className="navLink">
                        <a href="/customers/account"><i>{user}</i></a>
                    </li>
                    <li className="navLink">
                        <a href="/customers/cart"><i>{shoppingCart}</i></a>
                    </li>

                </ul>
        </header>
    )
}

export default NavBar;