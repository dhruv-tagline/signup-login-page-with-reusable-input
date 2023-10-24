import React from 'react'

const Input = ({ field, error, label, radioCheckLabel, defaultChecked, ...rest }) => {
    return (
        <div className='inpContainer'>
            <div className="lableInput">
                <label htmlFor={field}>{label}</label>
                <input className={`rInp valid ${error ? 'error' : ''}`} id={field} placeholder={`Please enter your ${field} here`} defaultChecked={defaultChecked} {...rest} />
                {radioCheckLabel && <label htmlFor={label}>{radioCheckLabel}</label>}
            </div>
            {error && <div className="error-msg">{error}</div>}
        </div>

    )
}

export default Input
