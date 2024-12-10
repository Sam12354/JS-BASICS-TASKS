import { Router } from "express";
import homeController from "../controllers/homeController.js";
import authController from "../controllers/authController.js";


const routes = Router()

routes.use(homeController)
// homecontroller pak e rauter sa page.redirectvane no s razli4no ime,
// idva ot bibliotekata express

routes.use('/auth', authController)

routes.all('*', (req, res) => {
    res.render('home/404', {title: '404 page'})
})
export default routes