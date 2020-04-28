import React from 'react'
import './ChosenPug.css' 

function ChosenPug ({chosenPug}) {

    return (
    <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={chosenPug.url} width="130px" alt={chosenPug.description} />
            <p>{chosenPug.expenses}</p>

    </div>
    )
}

export default ChosenPug