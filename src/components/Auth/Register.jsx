import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/auth.css"
import background from "../../assets/background.png"


function RegContainer() {
    return (
        <React.Fragment>
            <div className='container w-100'>
                <div className='formBox'>
                    <div className='formCont ml-5'>
                        <h1 className='font-bold mb-3'>Sign Up</h1>
                        <p className='mb-4 '>
                        Enter your credentials to create your free account.
                        </p>

                        <form action="POST" className='form'>
                            <label htmlFor="email" className='block text-gray-700 font-bold text-sm mb-2'>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="mb-4 form-input px-4 py-3 border rounded w-full shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <label htmlFor="fullName" className='block text-gray-700 font-bold text-sm mb-2'>Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                className="mb-4 form-input px-4 py-3 border rounded w-full shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <label htmlFor="companyName" className='block text-gray-700 font-bold text-sm mb-2'>Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                className="mb-4 form-input px-4 py-3 border rounded w-full shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mb-4 form-input px-4 py-3 border rounded w-full shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />

                            <input
                                type="checkbox"
                                name="keepSigned" id="keepSigned"
                                className='mr-2 leading-tight'
                            />
                            <label htmlFor="keepSigned" className='text-sm'>Keep me signed in</label>

                            {/* <link rel="stylesheet" href="#">Forgot Password</link> */}
                            <Link to="" className='text-teal-500 text-sm underline hover:text-teal-700 hover:no-underline float-right'>Forgot Password</Link>
                            <input
                                type="button" value="Login"
                                className='mt-2 mb-3 w-100 block bg-teal-500 hover:bg-teal-700 tracking-wide border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-2 rounded cursor-pointer'
                            />
                        </form>
                        <Link to="/register" className='text-teal-500 text-sm underline hover:text-teal-700 hover:no-underline'>Don't have an account? Sign up here!</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default function Register() {
    return (
        <div
            style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}
        >
            {/* <img src={login_logo} alt="Login Logo" width="600" height="600" /> */}
            <RegContainer />
        </div>
    )
}
