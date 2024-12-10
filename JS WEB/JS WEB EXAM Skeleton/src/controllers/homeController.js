import { Router } from "express"; 

const homeController = Router()

homeController.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' })
});

// /authorized posle trqbva da se premahne, vru6ta pri /authorized - username, email, i ID
// test 4e raboti authorization
homeController.get('/authorized', (req, res) => {
    res.send(req.user);
});

export default homeController
