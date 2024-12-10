import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const userSchema = new Schema({
    // tuk se o4akva da imame username, email password
    username: {
        type: String,
        required: [true, 'Username is required!'],
        // tova 6te napishe suob6tenieto
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
})

//създава структура (модел) за съхраняване на потребителско име, имейл и парола в базата данни

userSchema.pre('save', async function() {
    // vurhy user - shemata predi da se save 
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS)
    // suzdavame has parola da ne se vijda sus zvezdi4ki

    this.password = hash
    // novata parola e = na hash i predi da se save na6iq user
    // 6te se save parolata
})

const User = model('User', userSchema)

export default User;