import { Router } from "express";
import { itemService } from "../services/itemService.js";
import { getErrorMassage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getAllUsersByIds, getUserById } from "../services/authService.js";
import { checkIsLiked, checkIsOwner } from "../middlewares/ownerMiddleware.js";

const router = Router()

router.get('/catalog', async (req, res) => {

    try {
        const items = await itemService.getAll().lean()
        res.render('item/catalog', { items, title: 'Catalog Page' })
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/catalog', { title: 'Catalog Page', error })
    }

})

router.get('/create', isAuth, (req, res) => {
    res.render('item/create', { title: 'Create Page' })
})

router.post('/create', isAuth, async (req, res) => {

    const data = req.body 
    const ownerId = req.user._id

    try {
        await itemService.create(data, ownerId)
        res.redirect('/item/catalog')
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/create', { title: 'Create Page', error })
    }

})

router.get('/search', async (req, res) => {

    try {
        const items = await itemService.search(req.query).lean()
        res.render('item/search', { title: 'Search Page', items })
    } catch (err) {
        console.log(err);
    }

})

router.get('/:itemId/details', async (req, res) => {

    const items = await itemService.getItem(req.params.itemId).lean()
    const isOwner = items?.owner == req.user?._id
    const owner = await getUserById(items.owner)

    const isVoted = items.userList?.some(userId => userId == req.user._id)
    const voteCount = items.userList?.length || 0

    const users = await getAllUsersByIds(items.userList)
    const userList = users.join(', ')

    res.render('item/details', { items, title: 'Details Page', isOwner, owner, isVoted, voteCount, users, userList })
})

router.get('/:itemId/delete', isAuth, checkIsOwner, async (req, res) => {
   
    const itemId = req.params.itemId
    try {
        await itemService.remove(itemId)
        res.redirect('/item/catalog')
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('404', { title: '404 Page', error })
    }

})

router.get('/:itemId/edit', isAuth, checkIsOwner, async (req, res) => {

    const itemId = req.params.itemId

    try {
        const item = await itemService.getById(itemId).lean()
        res.render('item/edit', { item, title: 'Edit Page' })
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/edit', { title: 'Edit Page', error })
    }

})  

router.post('/:itemId/edit', isAuth, checkIsOwner, async (req, res) => {

    const itemId = req.params.itemId 
    const ownerId = req.body 

    try {
        await itemService.edit(itemId, ownerId)
        res.redirect(`/item/${itemId}/details`)
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/edit', { item, title: 'Edit Page', error })
    }

})

router.get('/:itemId/like', isAuth, checkIsLiked, async (req, res) => {

    const itemId = req.params.itemId 
    const userId = req.user._id 

    try {
        await itemService.like(itemId, userId)
        res.redirect(`/item/${itemId}/details`)
    } catch (err) {
        res.redirect('/item/catalog')
    }

})

export default router