import jwt from "../lib/jwt.js"
import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const authService = {

    async register(username, email, password, rePass){

        const user = await User.findOne({ $or: [{ email }, { username }] })

        if(password !== rePass){
            throw new Error('Password missmatch')
        }

        if(user){
            throw new Error('User already exists')
        }

        const newUser = await User.create({
            username, 
            email, 
            password
        })

        if(!newUser){
            throw new Error('Invalid user or password')
        }

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
            username: user.username,
            email: user.email
        }

        const header = { expiresIn: '2h' }
        const token = await jwt.sign(payLoad, process.env.JWT_SECRET, header)
        return token
    }

}

export default authService