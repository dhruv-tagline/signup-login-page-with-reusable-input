import React, { useEffect, useState } from "react";
import Input from "../../reusable/Input";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../reusable/Btn";
import "./style.css";
import Select from "../../reusable/Select";

const SignUp = () => {

    const navigate = useNavigate()
    const [signupDetails, setSignupDetails] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        setPassword: "",
        age: 18,
        gender: "Male",
        phone_no: "",
        hobby: [],
        state: "",
        city: "",
    });
    const [validationErrors, setValidationErrors] = useState({});
    const [successfullMsg, setSuccessfullMsg] = useState(false);

    function isEmailValid(email) {
        const emailRegex = /^[a-z0-9._-]+[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    function isPasswordValid(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        return passwordRegex.test(password)
    }

    const signUpField = [
        {
            type: "text",
            name: "first_name",
            state: signupDetails.first_name,
            error: validationErrors.first_name,
            field: "First name",
            lable: "First Name",
        },
        {
            type: "text",
            name: "last_name",
            state: signupDetails.last_name,
            error: validationErrors.last_name,
            field: "Last name",
            lable: "Last Name",
        },
        {
            type: "text",
            name: "email",
            state: signupDetails.email,
            error: validationErrors.email,
            field: "Email",
            lable: "Email",
        },
        {
            type: "password",
            name: "password",
            state: signupDetails.password,
            error: validationErrors.password,
            field: "Password",
            lable: "Password",
        },
        {
            type: "password",
            name: "setPassword",
            state: signupDetails.setPassword,
            error: validationErrors.setPassword,
            field: "Set password",
            lable: "Set Password",
        },
        {
            type: "number",
            name: "age",
            state: signupDetails.age,
            error: validationErrors.age,
            field: "Age",
            lable: "Age",
        },
        {
            type: "number",
            name: "phone_no",
            state: signupDetails.phone_no,
            error: validationErrors.phone_no,
            field: "Phone no",
            lable: "Phone No",
        },
        {
            type: "radio",
            name: "gender",
            state: "Male",
            lable: "Gender",
            radioCheckLabel: "Male",
            defaultChecked: true,
        },
        {
            type: "radio",
            name: "gender",
            state: "Female",
            radioCheckLabel: "Female",
        },
        {
            type: "radio",
            name: "gender",
            state: "Other",
            error: validationErrors.gender,
            radioCheckLabel: "Other",
        },
        {
            type: "checkbox",
            name: "hobby",
            state: "Bhajan",
            radioCheckLabel: "Bhajan",
            lable: "Hoobbies",
            labelFor: "hobby",
        },
        {
            type: "checkbox",
            name: "hobby",
            state: "Play Games",
            radioCheckLabel: "Play Games",
            labelFor: "hobby",
        },
        {
            type: "checkbox",
            name: "hobby",
            state: "Reading",
            radioCheckLabel: "Reading",
            labelFor: "hobby",
        },
        {
            type: "checkbox",
            name: "hobby",
            state: "Traveling",
            radioCheckLabel: "Traveling",
            error: validationErrors.hobby,
            labelFor: "hobby",
        },
    ];

    useEffect(() => {
        setSignupDetails({
            ...signupDetails,
            city: "",
        });
    }, [signupDetails.state])


    const handleChange = (e) => {
        const { name, value, type, checked, id } = e.target;
        if (type === "checkbox") {

            const updatedHobbies = checked
                ? [...signupDetails.hobby, value]
                : signupDetails.hobby.filter((hobby) => hobby !== value)

            setSignupDetails({
                ...signupDetails,
                hobby: updatedHobbies,
            });
            if (updatedHobbies.length === 0) {
                setValidationErrors({
                    ...validationErrors,
                    [name]: "Hobby is required",
                });
            }
        } else {
            setSignupDetails({
                ...signupDetails,
                [name]: value,
            });
        }

        if (validationErrors[name]) {
            setValidationErrors({
                ...validationErrors,
                [name]: "",
            });
        }

        if (value.length === 0) {
            setValidationErrors({
                ...validationErrors,
                [name]: `${id} is required`,
            });
        }
        if (name === "age") {
            if (value < 18 || value > 60) {
                setValidationErrors({
                    ...validationErrors,
                    [name]: `Age must be between 18 and 60`,
                });
            } else {
                setValidationErrors({
                    ...validationErrors,
                    [name]: "",
                });
            }
        }

        if (name === "phone_no") {
            if (value.length < 10 || value.length > 10) {
                setValidationErrors({
                    ...validationErrors,
                    [name]: `Phone no length should be 10`,
                });
            } else {
                setValidationErrors({
                    ...validationErrors,
                    [name]: "",
                });
            }
        }

        if (name === "state") {
            if (value === "Please Select State") {
                setValidationErrors({
                    ...validationErrors,
                    [name]: `Please select state`,
                    city: "State required for select city"
                });
            } else {
                setValidationErrors({
                    ...validationErrors,
                    [name]: "",
                    city: "",
                });
            }
        }

        if (name === "city") {
            if (value === "Please Select City") {
                setValidationErrors({
                    ...validationErrors,
                    [name]: `Please select city`,
                });
            } else {
                setValidationErrors({
                    ...validationErrors,
                    [name]: "",
                });
            }
        }
    };

    const signup = (e) => {
        e.preventDefault();
        const errors = {};

        if (!signupDetails.first_name) {
            errors.first_name = "First name is required";
        }
        if (!signupDetails.last_name) {
            errors.last_name = "Last name is required";
        }
        if (!signupDetails.email) {
            errors.email = "Email is required";
        } else if (!isEmailValid(signupDetails.email)) {
            errors.email = "Please enter valid email"
        }
        if (!signupDetails.password) {
            errors.password = "Password is required";
        } else if (!isPasswordValid(signupDetails.password)) {
            errors.password = "Password should contains at least one captial letter, one small letter, one digit, one special character and length 8 or more";
        }
        if (!signupDetails.setPassword) {
            errors.setPassword = "Set password is required";
        } else if (signupDetails.setPassword !== signupDetails.password) {
            errors.setPassword = "Set password is not matching with first password";
        }
        if (!signupDetails.age) {
            errors.age = "Age is required";
        } else if (signupDetails.age < 18 || signupDetails.age > 60) {
            errors.age = "Age must be between 18 and 60";
        }
        if (!signupDetails.gender) {
            errors.gender = "Gender is required";
        }
        if (!signupDetails.phone_no) {
            errors.phone_no = "Phone number is required";
        } else if (signupDetails.phone_no.length < 10 || signupDetails.phone_no.length > 10) {
            errors.phone_no = "Please enter valid 10 digit number";
        }
        if (signupDetails.hobby.length === 0) {
            errors.hobby = "At least one hobby is required";
        }
        if (!signupDetails.state || signupDetails.state === "Please Select State") {
            errors.state = "State is required";
        }
        if (!signupDetails.city || signupDetails.city === "Please choose correct..." || signupDetails.city === "Please Select City") {
            errors.city = "City is required";
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
        } else {
            document.getElementById("signUpForm").reset()
            setSignupDetails({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                setPassword: "",
                age: 18,
                gender: "Male",
                phone_no: "",
                hobby: [],
                state: "",
                city: "",
            });
            setSuccessfullMsg(true)
            setTimeout(() => {
                setSuccessfullMsg(false)
            }, 3000);
            console.log(signupDetails);
            navigate("/login")
        }
    };

    const mapSignUpField = signUpField.map((inp, index) => (
        <Input
            type={inp.type}
            name={inp.name}
            value={inp.state}
            onChange={handleChange}
            error={inp.error}
            field={inp.field}
            label={inp.lable}
            key={index}
            defaultChecked={inp.defaultChecked}
            radioCheckLabel={inp.radioCheckLabel}
        />
    ));

    const selectState = ["Please Select State", "Gujarat", "Maharashtra", "Delhi"];
    const mapState = selectState.map((state, index) => {
        return (
            <option value={state} key={index}>
                {state}
            </option>
        );
    });

    const cities = {
        "Please Select State": ["Please Select City..."],
        Gujarat: ["Please Select City", "Surat", "Bhavanagar", "Somnath", "Ahmedabad", "Gandhinagar"],
        Maharashtra: ["Please Select City", "Mumbai", "Nashik", "Nagpur", "Pune", "Jalgaon"],
        Delhi: ["Please Select City", "New Delhi", "Karawal Nagar", "Taj Pul", "Mandoli", "Hastsal"],
    };

    const state = signupDetails.state || "Please Select State";
    const selectCity = cities[state];
    const mapCity = selectCity.map((city, index) => {
        return (
            <option value={city} key={index}>
                {city}
            </option>
        );
    });

    const signUpSelectField = [
        {
            children: mapState,
            error: validationErrors.state,
            htmlFor: "state",
            text: "Select State",
            value: signupDetails.state,

        },
        {
            children: mapCity,
            error: validationErrors.city,
            htmlFor: "city",
            text: "Select City",
            value: signupDetails.city,

        },
    ]

    const mapSignUpSelectField = signUpSelectField.map((select, index) => (
        <Select children={select.children} error={select.error} id={select.htmlFor} htmlFor={select.htmlFor} text={select.text} value={select.value} onChange={handleChange} key={index} />
    ))

    return (
        <div className="signUp">
            <form className="signUpForm" id="signUpForm" onSubmit={signup}>
                <h1>Sign Up:</h1>
                <div className="inputField">{mapSignUpField}</div>
                <div className="selectContainer">{mapSignUpSelectField}</div>
                <Link to="/login" className="forgot" id="forgot">already sign up?</Link>
                <Btn name={"Sign Up"} type={"submit"} />
                {successfullMsg && <div className="msg"> Form Submited, see console for form state</div>}
            </form>

        </div>
    );
};

export default SignUp;
