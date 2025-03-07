import { Router } from 'express'
import homeController from './controllers/homeController.js'
import authController from './controllers/authController.js'
import itemController from './controllers/itemController.js'
import userController from './controllers/userController.js'

const routes = Router()

routes.use(homeController)
routes.use('/auth', authController)
routes.use('/item', itemController)
routes.use('/me', userController)

// routes.all('*', (req, res) => {
//     res.render('home/404', { title: '404 page' })
// })

export default routes