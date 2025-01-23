import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import routes from './routes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express()

const url = 'mongodb://localhost:27017'

mongoose.connect(url, { dbName: 'second-hand-Electronics' })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(`DB failed ${err}`))


app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('views', 'src/views')
app.set('view engine', 'hbs')

app.use('/static', express.static('src/public'))
app.use(express.urlencoded({extended: false}))

app.use(cookieParser())

app.use(authMiddleware)
app.use(routes)

app.listen(7877, () => console.log('Server is running on http://localhost:7877'))