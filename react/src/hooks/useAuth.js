import { useContext } from "react";
import { login, logout, register } from "../api/auth-api.js";
import { AuthContext } from "../contexts/AuthContext.jsx";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext)

    const loginHandler = async (email, password) => {
        
        const result = await login(email, password)
        changeAuthState(result)
    }

    return loginHandler
}

export const useRegister = () => {

    const { changeAuthState } = useContext(AuthContext)

    const registerHandler = async (email, password) => {
        
        const result = await register(email, password)
        changeAuthState(result)
    }

    return registerHandler
}

export const useLogout = () => {
    const { logout: localLogout } = useContext(AuthContext)

    const logoutHandler = async () => {
        await logout()
        localLogout()
    }

    return logoutHandler
}