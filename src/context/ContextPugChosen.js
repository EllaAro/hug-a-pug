import React, { useState } from 'react'

const Context = React.createContext();

function ContextPugChosen ({children}) {
    const [chosenPugs, setChosenPugs] = useState([]);

    const updateChosenPugs = () => {
        
    }

    return (
        <Context.Provider value={{setChosenPugs}}>
            {children}
        </Context.Provider>
    )

}

export default ContextPugChosen