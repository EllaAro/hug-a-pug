import React, {useContext} from 'react'
import './ChosenPug.css' 
import {ContextPugChosen} from '../../context/ContextPugChosen'

function ChosenPug ({chosenPug}) {
    const {removeChosenPug} = useContext(ContextPugChosen);

    return (
    <div className="cart-item">
            <i class="far fa-times-circle" onClick={() => removeChosenPug(chosenPug)}></i>
            <img src={chosenPug.url} width="130px" alt= {chosenPug.description} />
            <p>{chosenPug.expenses}</p>

    </div>
    )
}

export default ChosenPug