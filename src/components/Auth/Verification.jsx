import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/auth.css"
import logo from "../../assets/huntey_logo.png"
import Footer from './Footer';

function VerifyContainer() {
    return (
        <React.Fragment>
            <img src={logo} alt="" className='logo' />
            <div className='verifyContainer'>
                <form action="" name='one-time-code' className='otc mt-3'>
                    <h1 className='font-bold mb-3'>Verify Email</h1>
                    <p>Enter the 6-digits verification code sent to your email</p>
                    <fieldset>
                        <input
                            type="text" name="otc1" id="otc1"
                            pattern="[0-9]*" min="0" max="9" maxlength="1" inputtype="numeric"
                            className=""
                            required
                        />
                        <input
                            type="text" name="otc2" id="otc2"
                            pattern="[0-9]*" min="0" max="9" maxlength="1" inputtype="numeric"
                            className=""
                            required
                        />
                        <input
                            type="text" name="otc3" id="otc3"
                            pattern="[0-9]*" min="0" max="9" maxlength="1" inputtype="numeric"
                            className=""
                            required
                        />
                        <input
                            type="text" name="otc4" id="otc4"
                            pattern="[0-9]*" min="0" max="9" maxlength="1" inputtype="numeric"
                            className=""
                            required
                        />
                        <input
                            type="text" name="otc5" id="otc5"
                            pattern="[0-9]*" min="0" max="9" maxlength="1" inputtype="numeric"
                            className=""
                            required
                        />
                        <input
                            type="text" name="otc6" id="otc6"
                            pattern="[0-9]*" min="0" max="9" maxlength="1" inputtype="numeric"
                            className=""
                            required
                        />


                    </fieldset>
                    <Link to="/dashboard" className='hover:no-underline'>
                        <input
                            type="button" value="Submit"
                            className='mt-3 mb-3 w-100 block bg-teal-500 hover:bg-teal-700 tracking-wide border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-2 rounded cursor-pointer'
                        />
                    </Link>
                    <p className='text-sm'>Didn't receive the code? <Link to="/verify" className='text-teal-500 text-sm no-underline hover:text-teal-700 hover:no-underline'>Click to resend</Link></p>
                </form>
            </div>
        </React.Fragment>
    )
}

export default function Verification() {
    return (
        <React.Fragment>

            <VerifyContainer />
            <Footer />
        </React.Fragment>
    )
}
