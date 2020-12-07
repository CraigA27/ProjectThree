import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <header className="nav-container">
            <div className="logo-container">
                    <img src="https://png2.cleanpng.com/sh/dc599486ac1265438bd34bdee36ab0a6/L0KzQYm3UsAzN6VufZH0aYP2gLBuTgNvbZJwfeR8LYPrf7a0lvVkfJD3ReRAbn7sfri0kBhwbaQyTdMCNHTlSLOCVPJlOGgzUaoANEi3SIe4VcE4PmE8UKMENkC8QnB3jvc=/kisspng-sneakers-shoe-vector-running-shoes-5a74db8b94bd07.9854848615176078196092.png" className="header-logo"/>
            </div>
                <ul className="nav-links"> 
                    <li className="navLink">
                        <a href="/">Home</a>
                    </li>
                    <li className="navLink">
                        <a href="/customers">Sign In / Create Account</a>
                    </li>
                    <li className="navLink">
                        <a href="/customers/cart">Cart Details</a>
                    </li>
                    <li className="navLink">
                        <a href="/customers/account">Your Account</a>
                    </li>
                </ul>
        </header>
    )
}

export default NavBar;