import React from 'react'
import Btn from '../../reusable/Btn'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <h1>
                Page not created
            </h1>
            <Link to="/login"><Btn name={"Login"} /></Link>
            <Link to="/signUp"><Btn name={"Sign Up"} /></Link>
        </>
    )
}

export default ForgotPassword
