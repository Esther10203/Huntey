import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/auth.css"
import logo from "../../assets/huntey_logo.png"


function ForgotPassContainer() {
    return (
        <React.Fragment>
            <img src={logo} alt="" className='logo' />
            <div className='forgotContainer'>
                <form action="POST" className='form'>
                <h1 className='font-bold mb-2'>Forgot your password?</h1>
                    <p>Provide you email to help you reset your password</p>
                    <input
                        type="email"
                        id="email"
                        className="mt-4 form-input px-4 py-3 border rounded w-full shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <Link to="/resetpassword" className='hover:no-underline'>
                    <input
                        type="button" value="Next"
                        className='mt-3 mb-3 w-100 block bg-teal-500 hover:bg-teal-700 tracking-wide border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-2 rounded cursor-pointer'
                    />
                    </Link>
                </form>
            </div>
            <p className='footer mb-2'>Made with ♥ by Huntey group  |  huntey©2023</p>
        </React.Fragment>
    )
}

export default function ForgotPassword() {
    return (
        <React.Fragment>

            <ForgotPassContainer />

        </React.Fragment>
    )
}
