import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/auth.css"
import logo from "../../assets/huntey_logo.png"


function FooterContainer() {
    return (
        <React.Fragment>
            <p className='footer mb-2'>Made with ♥ by Huntey group  |  huntey©2023</p>
        </React.Fragment>
    )
}

export default function Footer() {
    return (
        <React.Fragment>

            <FooterContainer />

        </React.Fragment>
    )
}
