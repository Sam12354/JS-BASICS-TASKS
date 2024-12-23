import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10;

const newUserSchema = new Schema({

    username: {
        type: String,
        required: [true, 'Username is required']
    },

    email: {
        type: String,
        required: [true, 'Email is required']
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    }

})

newUserSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS)
    this.password = hash
})

const User = model('User', newUserSchema)

export default User