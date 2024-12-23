import { Router } from 'express'
import authController from './controllers/authController.js';
import homeController from './controllers/homeController.js';

const routes = Router();

routes.use(homeController)
routes.use('/auth', authController)

routes.all('*', (req, res) => {
    res.render('home/404', { title: '404 page' })
})

export default routes