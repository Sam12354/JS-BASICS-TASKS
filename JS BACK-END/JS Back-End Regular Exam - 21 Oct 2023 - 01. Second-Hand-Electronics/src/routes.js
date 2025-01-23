import { Router } from 'express'
import homeController from './controllers/homeController.js'
import authController from './controllers/authController.js'
import router from './controllers/itemController.js'

const routes = Router()

routes.use(homeController)
routes.use('/auth', authController)
routes.use('/item', router)

routes.all('*', (req, res) => {
    res.render('home/404', { title: '404 page' })
})

export default routes