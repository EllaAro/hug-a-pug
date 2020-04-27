import React, {useContext} from 'react'
import {ContextPugList} from '../context/ContextPugList'
import Pug from '../components/pug/Pug'
import '../App.css'

function PugList () {
    const {allPugs} = useContext(ContextPugList);
    const pugs = allPugs.map(pugInfo => (
        <Pug key={pugInfo.id} pugInfo={pugInfo}/>
    ));
    
    return (
        <main className="pug-list">
            {pugs}
        </main>
    )
}

export default PugList;