import React from 'react';

const NavBar = () => {
    return(
        <header className="nav-container">
            <h1>Nav</h1>
            <img className="header-logo"/> 
                <ul>
                    <li className="navLink">
                        <a href="/">Home</a>
                    </li>
                    <li className="navLink">
                        <a href="/customers">Sign In / Create Account</a>
                    </li>
                </ul>
        </header>
    )
}

export default NavBar;