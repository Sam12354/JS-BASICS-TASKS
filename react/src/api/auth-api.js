import { post } from './requester.js'

const BASE_URL = "http://localhost:3030/users"

export const login = (email, password) => {

    const authData = post(`${BASE_URL}/login`, { email, password })

    return authData
}

export const register = (email, password) => {

    const authData = post(`${BASE_URL}/register`, { email, password })

    return authData

}