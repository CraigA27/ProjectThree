import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser,  } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const user = <FontAwesomeIcon icon={faUser} />
    return(
        <header className="nav-container">
            <div className="logo-container">
            <a href="/"><img src="https://png2.cleanpng.com/sh/dc599486ac1265438bd34bdee36ab0a6/L0KzQYm3UsAzN6VufZH0aYP2gLBuTgNvbZJwfeR8LYPrf7a0lvVkfJD3ReRAbn7sfri0kBhwbaQyTdMCNHTlSLOCVPJlOGgzUaoANEi3SIe4VcE4PmE8UKMENkC8QnB3jvc=/kisspng-sneakers-shoe-vector-running-shoes-5a74db8b94bd07.9854848615176078196092.png" className="header-logo"/></a>
            </div>
                <ul className="nav-links">  
                    <li className="navLink">
                        <a href="/customers">Sign In / Create Account</a>
                    </li>
                    <li className="navLink">
                        <a href="/customers/cart"><i>{shoppingCart}</i></a>
                    </li>
                    <li className="navLink">
                        <a href="/customers/account"><i>{user}</i></a>
                    </li>
                </ul>
        </header>
    )
}

export default NavBar;