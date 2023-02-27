import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/auth.css"
import logo from "../../assets/huntey_logo.png"
import Footer from './Footer';


function ResetPassContainer() {
    return (
        <React.Fragment>
            <img src={logo} alt="" className='logo' />
            <div className='resetContainer'>
                <form action="POST" className='form'>
                <h1 className='font-bold mb-3'>Reset password</h1>
                    <label htmlFor="newPass">New password</label>
                    <input
                        type="password"
                        id="newPass"
                        className="mb-3 form-input px-4 py-3 border rounded w-full shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="confirmPass">Confirm password</label>
                    <input
                        type="password"
                        id="confirmPass"
                        className="mb-3 form-input px-4 py-3 border rounded w-full shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <Link to="/login" className='hover:no-underline'>
                    <input
                        type="button" value="Set Password"
                        className='mt-3 mb-1 w-100 block bg-teal-500 hover:bg-teal-700 tracking-wide border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-2 rounded cursor-pointer'
                    />
                    </Link>
                    <p className='font-light text-sm'>You will be redirected to log in with your new password</p>
                </form>
            </div>
            
        </React.Fragment>
    )
}

export default function ResetPassword() {
    return (
        <React.Fragment>
            <ResetPassContainer />
            <Footer />
        </React.Fragment>
    )
}
