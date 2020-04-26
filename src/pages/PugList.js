import React, {useContext} from 'react'
import {ContextPugList} from '../context/ContextPugList'
import Pug from '../components/pug/Pug'

function PugList () {
    const {allPugs} = useContext(ContextPugList);
    const pugs = allPugs.map(pugInfo => (
        <Pug />
    ));
    
    return (
        <div>
        {pugs}
        </div>
    )
}

export default PugList;