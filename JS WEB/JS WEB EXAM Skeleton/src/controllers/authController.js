import { Router } from "express";
import authService from "../services/authService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register Page' })
})

authController.post('/register', async (req, res) => {
    // sled kato get-nem input-a ot registraciqta
    // da redirectnem kum login

    // sega 6te vzemem ot reg.body za6toto l index.js
    // dobavihme tova app.use(express.urlencoded({extended: false}))
    // body parsera ni polzvolqva da vzemem email, username i tezi ne6ta deto sa tuk napisani kato cqlo
    const { username, email, password, rePassword } = req.body

    //TODO: Check password

    try{
        const token = await authService.register(username, email, password, rePassword)
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true })
        // { httpOnly: true } - garantira 4e biskvitkata moje da bude dostupena samo 4rez survara
        // a ne 4rez nqkoi script ot strana na klienta

        res.redirect('/')
    }catch(err){
        res.render('auth/register', { title: 'Register Page', username, email, error: err })
        // TODO: Add Error
        // ako hvurli gre6ka renderira su6tata stranica, osven tova
        // trqbva da dobavim userdata
        // pri post ako ne yspee6 da registrira6 user iskam da vurnesh su6tata stranica i da vurnem i gre6ka
    }

})

authController.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login Page' })
})

authController.post('/login', async (req, res) => {
    // da vzemem datata
    const { email, password } = req.body

    try{
        const token = await authService.login(email, password, { httpOnly: true })
        // add token to cookie / prevru6tame tokena v cookie
    
        res.cookie(AUTH_COOKIE_NAME, token)
    
        // i redirect za home page
        res.redirect('/')
    }catch(err){
        
        const error = getErrorMessage(err)
        res.render('auth/login', { title: 'Login Page', email, error })
        // emaila se izpisva
        // poneje sum podal gre6kata i sum q slojil v main.hbs to q zasi4a avtomati4no
    }


});

// pishe vutre title Login Page i trqbva da si suotvetstva sus zaglavieto na login.hbs
// v html pak pi6e Login Page na Title

authController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
});

export default authController