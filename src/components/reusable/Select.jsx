import React from 'react'

const Select = ({ htmlFor, text, children, error, ...rest }) => {
    return (
        <div className="select">
            <label htmlFor={htmlFor}>{text}</label>
            <div className="selectInputContainer">
                <select
                    className={`rInp valid ${error ? 'error' : ''}`}
                    name={htmlFor}
                    id={htmlFor}
                    {...rest}
                >
                    {children}
                </select>
                {error && <div className="error-msg">{error}</div>}
            </div>
        </div>
    )
}

export default Select
