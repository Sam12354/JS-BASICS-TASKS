import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

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

        localStorage.setItem('accessToken', state.accessToken);

        setAuthState(state)
    }

    const logout = () => {
        localStorage.setItem('auth', '{}');  // Clear the persisted auth state in localStorage
        setAuthState(null);  // Optionally clear the state in the app
    }

    const contextData = {
        userId: authState?._id,
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