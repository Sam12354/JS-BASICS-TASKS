import { Router } from 'express';
import authService from '../services/authService.js';
import { AUTH_COOKIE_NAME } from '../constants.js';
import { getErrorMassage } from '../utils/errorUtils.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.status(204).end(); 
});

authController.post('/register', isGuest, async (req, res) => {
    // console.log(req.body)
    const { email, password, rePass } = req.body;

    try {
        const { token, _id, email: userEmail } = await authService.register(email, password, rePass);
        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true })
        res.json({ token, _id, email: userEmail });
    } catch (err) {
        res.status(409).json({ error: getErrorMassage(err) });
    }

})

authController.get('/login', isGuest, (req, res) => {
    res.status(204).end(); 
});

authController.post('/login', isGuest, async (req, res) => {
    try {
        // console.log("Received login request", req.body)
        const { email, password } = req.body;

        const { token, _id, email: userEmail } = await authService.login(email, password);

        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });

        res.json({ token, _id, email: userEmail });

    } catch (err) {
        res.status(400).json({ error: getErrorMassage(err) });
    }
});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME)
    res.status(204).end()
})

export default authController