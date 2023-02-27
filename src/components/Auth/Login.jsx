import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/auth.css"
import background from "../../assets/background.png"

function LoginContainer() {
    return (
        <React.Fragment>
            <div className='loginContainer w-100'>
                <div className='loginFormBox'>
                    <div className='loginFormCont ml-5'>
                        <h1 className='font-bold mb-3'>Sign in</h1>
                        <p className='mb-4 w-75'>
                            Please enter your email and password for  signing in. As soon as you are done, we will redirect you to your dashboard.
                        </p>

                        <form action="POST" className='form'>
                            <label htmlFor="email" className='block text-gray-700 font-bold text-sm mb-2'>Email Address</label>
                            <input
                                type="email"
                                id="email"
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
                            
                            <Link to="/forgotpassword" className='text-teal-500 text-sm underline hover:text-teal-700 hover:no-underline float-right'>Forgot Password?</Link>
                            
                            <Link to="/dashboard" className='hover:no-underline'>
                            <input
                                type="button" value="Login"
                                className='mt-2 mb-3 w-100 block bg-teal-500 hover:bg-teal-700 tracking-wide border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-2 rounded cursor-pointer'
                            />
                            </Link>
                        </form>
                        <Link to="/register" className='text-teal-500 text-sm underline hover:text-teal-700 hover:no-underline'>Don't have an account? Sign up here!</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default function Login() {
    return (
        <div
            style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}
        >
            <LoginContainer />
        </div>
    )
}
