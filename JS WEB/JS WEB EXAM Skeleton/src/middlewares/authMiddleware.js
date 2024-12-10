import { AUTH_COOKIE_NAME } from "../constants.js"
import jwt from "../lib/jwt.js";

export const authMiddleWare = async (req, res, next) => {
    // tova (middleware) validira user-ite koito pretendirat 4e sa avtentikirani
    // i koito sa da gi propusne 
    // sledovatelno vijdame dali ima token
    const token = req.cookies[AUTH_COOKIE_NAME];
    // vijdame ima li token

    if(!token){
        // ako nqma token go puskame
        return next();
    }

    // validirame tokena koito imame ve4e
    // validirame go s pomo6ta na bibliotekata jwt
    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        // proces.env.auth  e podavane na secret-a
        // trqbva i try-catch za6toto jwt 6te grumne ako tokena e nevaliden

        req.user = decodedToken; // - tova sudurja v sebe si id, email, password
        req.isAuthenticated = true;

        res.locals.user = decodedToken;
        res.locals.isAuthenticated = true;

        // poslednite 2 sa za navigaciqta / slujebno property - pokazva 4e nqkoi e avtentikiran - 6te go polzam v
        // main.hbs

        next();
    } catch (err) {
        res.clearCookie(AUTH_COOKIE_NAME);
        // ako e nevaliden tokena purvo go 4istim
        res.redirect('/auth/login');
    }

};

export const isAuth = (req, res, next) => {
    // dali e avtentikiran user-a
    if(!req.user){
        return res.redirect('/auth/login')
    }
    // ako ima user zna4i e true - zaka4en obekt
    // ako nqma - pra6tam na login
    // toest slaga se na puti6ta v koito samo avtentikirane user-i mogat da produljat napred

    next()
}