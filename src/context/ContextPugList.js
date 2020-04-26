import React, {useState, useEffect} from "react"
import pugsData from "..data/pugsData"

const Context = React.createContext()

function ContextPugListProvider({children}) {
    const [allPugs, setAllPugs] = useState([]);
    
    useEffect(() => setAllPugs(pugsData), []);

    return (
        <Context.Provider value={{allPugs}}>
            {children}
        </Context.Provider>
    )
}

export {ContextPugListProvider, Context as ContextPugList}