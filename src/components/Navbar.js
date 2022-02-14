import React from "react"
import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo"  className="logo" />
            <p>Coded by <a href="https://github.com/DaianaArena">Daiana Arena</a></p>
        </nav>
    )
}