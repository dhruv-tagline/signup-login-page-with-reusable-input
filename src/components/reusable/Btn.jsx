import React from 'react'
import "./style.css"

const Btn = ({ name, type }) => {
    return (
        <button className='btn' type={type}>{name}</button>
    )
}

export default Btn
