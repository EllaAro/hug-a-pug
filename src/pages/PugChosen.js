import React, {useContext} from 'react'
import {ContextPugChosen} from '../context/ContextPugChosen'
import ChosenPug from '../components/chosenPug/ChosenPug'
import  '../App.css'

function PugChosen () {
    const {chosenPugs, sumOfExpenses} = useContext(ContextPugChosen);
    const chosen = chosenPugs.map(pug => <ChosenPug key={pug.id} chosenPug={pug}/>);

    return (
        <main className='chosen-pugs-cart'>
            <h1>Chosen Pugs</h1>
            {chosen}
            <h3>Total Cost Of Expenses: {sumOfExpenses()}</h3>
        </main>
    )
}

export default PugChosen;