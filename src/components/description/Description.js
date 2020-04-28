import React from 'react'
import './Description.css'

function Description ({pugInfo}) {
    return (
        <div className='modal'>
            <h1>{pugInfo.name}</h1>
            <h3>{pugInfo.description}</h3>
            <p>Expenses Cost: {pugInfo.expenses}$</p>
        </div>
    )
}

export default Description