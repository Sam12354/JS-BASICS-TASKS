import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

const userSchema = new Schema({

    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [5, 'Username must be at least 5 characters long']
    },

    fullName: {
        type: String,
        required: [true, 'fullName is required'],
        validate: /^[A-Za-z]+ [A-Za-z]+$/
    }, 

    password: {
        type: String, 
        required: [true, 'Password is required'],
        minLength: [4, 'Password must be at least 4 characters long']
    }

}) 

userSchema.pre('save', async function(){

    const hash = await bcrypt.hash(this.password, SALT_ROUNDS)
    this.password = hash

})

const User = model('User', userSchema)

export default User