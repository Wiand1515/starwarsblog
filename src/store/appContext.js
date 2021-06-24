import { useState, useEffect, createContext } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: {...state.actions}
            })
            
        }))

        useEffect(() => {
           state.actions.getCharacters("https://www.swapi.tech/api/people/")
           state.actions.getPlanets("https://www.swapi.tech/api/planets/")
           state.actions.getStarships("https://www.swapi.tech/api/starships")
            

        }, [])




        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper;
}
export default injectContext;