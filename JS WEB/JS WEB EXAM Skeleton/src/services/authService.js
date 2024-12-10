import bcrypt from 'bcrypt';
import User from "../models/User.js"
import jwt from '../lib/jwt.js';

const authService = {
    async register(username, email, password, rePassword){

        const user = await User.findOne({ $or: [{ email }, { username }] })
        // taka izglejda s mongoDB zaqvka

        // const user = User.findOne().or([{ email }, { username }])
        // pravim zaqvkata i kazvame - nameri mi pone edin s tozi email ili tozi username

        if(password !== rePassword){
            throw new Error('Password missmatch')
        }
        // tazi gre6ka za parolata 6te se hvane v try catch

        if(user){
            throw new Error('User already exists');
        }

        const newUser = await User.create({
            username, 
            email, 
            password
        });

        return this.generateToken(newUser)
    },

    async login(email, password){
        // ne6tata koito pravim 
        // get user from db - pone edin user koito ima tozi email
        const user = await User.findOne({ email })

        // throw error if no user
        if(!user){
            throw new Error('Invalid user or password')
        }

        // if user exist check password - za celta 6te ni trqbva bycrypt deto za paroli
        // sravnqvame datata s encryp-natata parola - user password e hash-irano a password ne e
        // tova kato sloja mishkata na nego si kazva 4e vru6ta promise ot boolean koeto kazva verno li e ili gre6no
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            throw new Error('Invalid user or password')
        }

        // if password ok - generate token
        // payLoad e informaciqta koqto iskame da zapazim v tokena, tq da stane 4ast ot tokena
        
        return this.generateToken(user);
    },

    async generateToken(user){
        const payLoad = {
            _id: user._id,
            email: user.email,
            username: user.username,
        }

        const header = { expiresIn: '2h' }
        const token = await jwt.sign(payLoad, process.env.JWT_SECRET, header);
        return token
        // return token
    }
};

// izvikvame authservice, authService pri registraciq 6te izvika user-a i t6e registrira user-a

export default authService

// v register hbs sum napravil value={{username}} i tova za parolata za da moje dannite avtomati4no da se pokazvat 
// kato refresh-na