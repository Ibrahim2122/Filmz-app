import React from "react";
import logo from './imgs/logo.svg'
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="img">
                <img src={logo} alt="logo"/>
                <p>Filmz</p>
            </div>

            <ul>
                <li>Browse Movies</li>
                <li>Search</li>
            </ul>
        </header>
    )
}

export default Header;