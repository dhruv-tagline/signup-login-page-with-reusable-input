import React, { useState } from 'react'
import Input from '../../reusable/Input'
import Btn from '../../reusable/Btn';
import "./style.css"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState({});

    function isEmailValid(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });

        if (validationErrors[name]) {
            setValidationErrors({
                ...validationErrors,
                [name]: "",
            });
        }
    };

    const signup = (e) => {
        e.preventDefault();
        const errors = {};
        if (!loginForm.email) {
            errors.email = "Email is required";
        } else if (!isEmailValid(loginForm.email)) {
            errors.email = "Please enter valid email";
        }
        if (!loginForm.password) {
            errors.password = "Password is required";
        } else if (loginForm.password.length < 8) {
            errors.password = "Password can't be smaller than 8 letter";
        }
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
        } else {
            console.log();
            setLoginForm({
                email: "",
                password: "",
            });
            console.log(loginForm);
            navigate("/")
        }
    };

    const loginFormInput = [
        {
            type: "text",
            name: "email",
            field: "email",
            state: loginForm.email,
            error: validationErrors.email,
            label: "Email",

        },
        {
            type: "password",
            name: "password",
            field: "password",
            state: loginForm.password,
            error: validationErrors.password,
            label: "Password",

        },
    ]

    return (
        <div className='login'>
            <form className='loginForm' id='loginForm' onSubmit={signup}>
                <h1>Login:</h1>
                {
                    loginFormInput.map((inp) => <Input type={inp.type} name={inp.name} state={inp.state} onChange={handleChange} error={inp.error} field={inp.field} key={inp.field} label={inp.label} />)
                }
                <Link to="/forgotPassword" className='forgot' id='forgot'>Forgot Password</Link>
                <Link to="/signUp" className='forgot' id='forgot'> Want To Sign Up?</Link>
                <Btn name={"Login"} type={"submit"} />
            </form>
        </div>
    )
}

export default Login
