import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/auth.css"
import logo from "../../assets/huntey_logo.png"


function VerifyContainer() {
    return (
        <React.Fragment>
            <img src={logo} alt="" className='logo'/>
            <div className='verifyContainer'>
                <h1 className='font-bold mb-3'>Verify Email</h1>
                <p>Enter the 6-digits verification code sent to your email</p> 
            </div>
        </React.Fragment>
    )
}

export default function Verification() {
    return (
        <React.Fragment>

            <VerifyContainer />

        </React.Fragment>
    )
}
