import { post } from './requester.js'

const BASE_URL = "http://localhost:3030/users"

export const login = async (email, password) => {

    const authData = await post(`${BASE_URL}/login`, { email, password })
    console.log(authData);

    return authData
}