import { login } from "../api/auth-api.js";

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        console.log('login handler');
        const result = await login(email, password)
        console.log(result);
    }

    return loginHandler
}