import React, {useContext, useState} from 'react'
import {ContextPugChosen} from '../context/ContextPugChosen'
import ChosenPug from '../components/chosenPug/ChosenPug'
import  '../App.css'

function PugChosen () {
    const [buttonText, setButtonText] = useState('Submit A Request');
    const [requestText, setRequestTextText] = useState('');
    const {chosenPugs, sumOfExpenses, isChosenPugsEmpty, emptyChosenPugs} = useContext(ContextPugChosen);
    const chosen = chosenPugs.map(pug => <ChosenPug key={pug.id} chosenPug={pug}/>);

    const submitRequest = () => { // Replacing an Ajax call - this is a dummy way of 'submitting' a request
        setButtonText("Submitting...");
        setTimeout(() => {
            setRequestTextText("Reqest Submitted");
            emptyChosenPugs();
        }, 3000)
    }

    return (
        <main className='chosen-pugs-cart'>
            <h1>Chosen Pugs</h1>
            {chosen}
                {!isChosenPugsEmpty() &&
                <h3>Total Cost Of Expenses: {sumOfExpenses()}$</h3>}
                {!isChosenPugsEmpty() &&
                <div className="request-btn">
                    <button className='myButton' onClick={submitRequest}>{buttonText}</button>
                </div>} 
                <h3>{requestText}</h3>
        </main>
    )
}

export default PugChosen;