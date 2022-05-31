import logo from'../img/reactjs-icon.png'
import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return(
        <nav>
            <img src={logo} alt="logo" className="nav--logo"/>
            <h2 className="nav--logo_text">ReactFacts</h2>
            <p className="nav--description">React Course - Project 1</p>
        </nav>
    )
}