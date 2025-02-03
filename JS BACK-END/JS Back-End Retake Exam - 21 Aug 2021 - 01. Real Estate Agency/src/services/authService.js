import jwt from "../lib/jwt.js"
import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const authService = {

    async register(fullName, username, password, rePass){

        const user = await User.findOne({ $or: [{ fullName }, { username }] })

        if(password !== rePass){
            throw new Error('Passowrd missmatch')
        }

        if(user){
            throw new Error("User already exists")
        }

        const newUser = await User.create({
            fullName, 
            username, 
            password
        })

        return this.generateToken(newUser)

    },

    async login(username, password){

        const user = await User.findOne({ username })

        if(!user){
            throw new Error('Invalid user or password')
        }

        const isValid = await bcrypt.compare(password, user.password)

        if(!isValid){
            throw new Error('Invalid user or password')
        }

        return this.generateToken(user)

    },

    async generateToken(user){
        const payLoad = {
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
        }

        const headers = { expiresIn: '2h' }
        const token = await jwt.sign(payLoad, process.env.JWT_SECRET, headers)
        return token

    }

}

export const getUserById = async (id) => {
    let user = await User.findById(id)

    return user.username
}

export const getAllUsersByIds = async (ids) => {
    let users = await User.find({ _id: { $in: ids } })

    return users.map(userId => userId.fullName)

}

export default authService