import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { logout } from "../api/auth-api.js";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null
})

export function AuthContextProvider(props){
    const [authState, setAuthState] = usePersistedState('auth', {})

    const changeAuthState = (state) => {

        setAuthState(state)
    }

    const logout = () => {
        setAuthState(null)
    }

    const contextData = {
        userId: authState?._userId,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}