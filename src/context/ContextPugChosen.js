import React, { useState } from 'react'

const Context = React.createContext();

function ContextPugChosenProvider ({children}) {
    const [chosenPugs, setChosenPugs] = useState([]);
    console.log(chosenPugs);
    
    const updateChosenPugs = (newChosenPug) => setChosenPugs( prevChosenPugs => setChosenPugs([...prevChosenPugs,newChosenPug]));
     
    const removeChosenPug = (removedChosenPug) => {
        setChosenPugs(prevChosenPugs => prevChosenPugs.filter(pug => pug.id !== removedChosenPug.id));
     }
    
    const sumOfExpenses = () => {
        if (chosenPugs.length > 0) return chosenPugs.map(pug => pug.expenses).reduce((prev, next) => prev + next).toFixed(2);
        return 0 ;   
    }

    const isChosenPugsEmpty = () => {
        return (chosenPugs === undefined || chosenPugs.length === 0);
    }

    return (
        <Context.Provider value={{chosenPugs, updateChosenPugs, removeChosenPug, sumOfExpenses, isChosenPugsEmpty}}>
            {children}
        </Context.Provider>
    )

}

export { ContextPugChosenProvider, Context as ContextPugChosen }