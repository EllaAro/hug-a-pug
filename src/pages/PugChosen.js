import React, {useContext} from 'react'
import {ContextPugChosen} from '../context/ContextPugChosen'
import  '../App.css'

function PugChosen () {
    const {chosenPugs} = useContext(ContextPugChosen);
    const chosen = chosenPugs.map(pug => pug.id);
    return (
        <main className='chosen-pugs-cart'>
            <h1>These Are The Pugs You Chose!</h1>
            {chosen}
        </main>
    )
}

export default PugChosen;