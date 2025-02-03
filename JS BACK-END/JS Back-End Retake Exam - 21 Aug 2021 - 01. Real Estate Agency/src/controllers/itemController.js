import { Router } from "express";
import { itemService } from "../services/itemService.js";
import { getErrorMassage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { checkIsLiked, checkIsNotOwner, checkIsOwner } from "../middlewares/ownerMiddleware.js";
import { getAllUsersByIds } from "../services/authService.js";
import Item from "../models/Item.js";

const routes = Router()

routes.get('/catalog', async (req, res) => {
    try {
        const items = await itemService.getAll().lean()
        res.render('item/catalog', { items, title: 'Catalog' })
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/catalog', { title: 'Catalog', error })
    }
})

routes.get('/create', isAuth, async (req, res) => {
    res.render('item/create', { title: 'Create Page' })
})

routes.post('/create', isAuth, async (req, res) => {
    const item = req.body 
    const data = req.user._id
    try {
        await itemService.create(item, data)
        res.redirect('/item/catalog')
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/create', { item, title: 'Create Page', error })
    }
})

routes.get('/search', async (req, res) => {
    try {
        let items = []
        if(req.query.name){
            items = await itemService.search({ name: req.query.name }).lean()
        }
        res.render('item/search', { items, title: 'Search Page' })
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/search', { title: 'Search Page', error })
    }
})

routes.get('/:itemId/details', async (req, res) => {

    const item = await itemService.getItem(req.params.itemId).lean()  
    
    const isOwner = item.owner == req.user?._id

    const peopleRented = await getAllUsersByIds(item.userList)
    const allPeopleRented = peopleRented.join(', ')

    const isVoted = item.userList.some((userId) => userId == req.user?._id)
    
    if(isVoted){
        await itemService.edit( item._id, { $inc: { pieces: -1 } });
    }
   
    let outOfSpace = false 
    if(item.pieces === 0){        
        outOfSpace = true
    }
    
    let noTentants = false 
    if(item.userList.length <= 0){
        noTentants = true
    }

    res.render('item/details', { item, title: 'Details Page', isOwner, allPeopleRented, isVoted, outOfSpace, noTentants })

})

routes.get('/:itemId/delete', checkIsOwner, isAuth, async (req, res) => {

    const itemId = req.params.itemId 
    try {
        await itemService.remove(itemId)
        res.redirect('/item/catalog')
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/create', { title: 'Details Page', error })
    }

})

routes.get('/:itemId/edit', isAuth, checkIsOwner, async (req, res) => {
    const itemId = req.params.itemId 
    try {
        const item = await itemService.getById(itemId).lean()
        res.render('item/edit', { item ,title: 'Edit Page' })
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/create', { title: 'Edit Page', error })
    }
})

routes.post('/:itemId/edit', isAuth, checkIsOwner, async (req, res) => {
    const itemId = req.params.itemId 
    const item = req.body
    try {
        await itemService.edit(itemId, item)
        res.redirect(`/item/${itemId}/details`)
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/create', { item, title: 'Edit Page', error })
    }
})

routes.get('/:itemId/like', checkIsNotOwner, checkIsLiked, isAuth, async (req, res) => {
    const itemId = req.params.itemId 
    const userId = req.user._id 

    try {
        await itemService.like(itemId, userId)
        res.redirect(`/item/${itemId}/details`)
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/details', { title: 'Details Page', error })
    }
})


export default routes