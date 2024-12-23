import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose'
import 'dotenv/config'
import handlebars from 'express-handlebars'
import routes from './routes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

const url = 'mongodb://localhost:27017';

mongoose.connect(url, { dbName: 'DESET-OPIT' })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(`DB failed ${err}`))


app.engine('hbs', handlebars.engine({ extname: 'hbs' })) //
app.use(express.urlencoded({ extended: false }))
app.set('views', 'src/views')
app.set('view engine', 'hbs')

app.use(cookieParser())
app.use('/static', express.static('src/public')) //

app.use(authMiddleware)
app.use(routes) 
app.listen(3000, () => console.log('Server is running on http://localhost:3000'))