import { createContext } from "react";

const StateContext = createContext({})

export const ContextProvider  = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    return (
        <StateContext.Provider value={{

        }}>
        {children}
        </StateContext.Provider>
    )
}