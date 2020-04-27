import React, { useState } from 'react'

const Context = React.createContext();

function ContextPugChosenProvider ({children}) {
    const [chosenPugs, setChosenPugs] = useState([]);
    console.log(chosenPugs);
    
    const updateChosenPugs = (newChosenPug) => setChosenPugs( prevChosenPugs => setChosenPugs([...prevChosenPugs,newChosenPug]));
     
    const removeChosenPug = (removedChosenPug) => {
        setChosenPugs(prevChosenPugs => prevChosenPugs.filter(pug => pug.id !== removedChosenPug.id))
     }

    return (
        <Context.Provider value={{chosenPugs, updateChosenPugs, removeChosenPug}}>
            {children}
        </Context.Provider>
    )

}

export { ContextPugChosenProvider, Context as ContextPugChosen }