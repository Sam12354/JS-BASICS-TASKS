import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
})

export function AuthContextProvider(props){
    const [authState, setAuthState] = usePersistedState('auth', {})

    const changeAuthState = (state) => {

        // localStorage.setItem('accessToken', state.accessToken)

        setAuthState(state)
    }

    const contextData = {
        userId: authState._userId,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}