import express from "express";
import handlebars from 'express-handlebars' ;
// set up na engine
import mongoose from "mongoose";
// mongoose - baza danni
import routes from "./views/routes.js";
import cookieParser from "cookie-parser";
import 'dotenv/config'
import { authMiddleWare } from "./middlewares/authMiddleware.js";
// pozvolqva na apa da polzva secret values ot .env
const app = express()

const url = 'mongodb://localhost:27017'
mongoose.connect(url, { dbName: 'volcano'}) //TODO: da smenq imeto posredstvom zada4ata
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(`DB failed ${err}`))
// set up-vane na mongoose
// i setup na imeto na bazata danni
// then ako yspeshno se svurjesh napishi db connected
// vse edno try catch

app.engine('hbs', handlebars.engine({
    // registrirame nov engine, kru6tavame go s extention-a koito e "hbs" i posle dobavqme samiq engine
    extname: "hbs" //set up na engine ime
}));

app.set('views', 'src/views')
// tova set-va directory, ako views e v osnovnata papka ne go pravq

app.set('view engine', 'hbs')
// tuk kazvame na engine 4e trqbva da se izpolzva i podavame imeto na view engin-a - "hbs"

app.use('/static', express.static('src/public'))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
// 4ete biskvitkite prateni v brauzura i gi pravi dostupni za zaqvki kum survera
app.use(authMiddleWare);
app.use(routes);


app.listen(3000, () => console.log('Server is running on http://localhost:3000'))