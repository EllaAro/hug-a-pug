import React, {useContext} from 'react'
import {ContextPugChosen} from '../context/ContextPugChosen'

function PugChosen () {
    const {chosenPugs} = useContext(ContextPugChosen);
    const chosen = chosenPugs.map(pug => pug.id);
    return (
        <div>
            <h2>chosen</h2>
            {chosen}
        </div>
    )
}

export default PugChosen;