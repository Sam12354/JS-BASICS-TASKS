import jwt from "../lib/jwt.js"
import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const authService = {

    async register(email, password, rePass){

        const user = await User.findOne({ email })

        if(password !== rePass){
            throw new Error('Passowrd missmatch')
        }

        if(user){
            throw new Error("User already exists")
        }

        const newUser = await User.create({
            email, 
            password
        })

        return this.generateToken(newUser)

    },

    async login(email, password){

        const user = await User.findOne({ email })

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
            email: user.email
        }

        const headers = { expiresIn: '2h' }
        const token = await jwt.sign(payLoad, process.env.JWT_SECRET, headers)
        return token

    }

}

export const getUserId = async (id) => {
    const user = await User.findById(id).lean()
    return user.email
} 

export const getAllUsersByIds = async (ids) => {
    let users = await User.find({ _id: {$in: ids}}).select('email')
    users = users.map(user => user.name)
    return users
}

export default authService