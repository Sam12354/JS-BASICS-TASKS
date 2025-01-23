import { Router } from "express";
import { itemService } from "../services/itemService.js";
import { getErrorMassage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getAllUsersByIds, getUserById } from "../services/authService.js";
import { checkIsLiked, checkNotOwner, checkOwner } from "../middlewares/ownerMiddleware.js";

const router = Router();

router.get('/catalog', async (req, res) => {
    try {
        const items = await itemService.getAll().lean()
        res.render('item/catalog', { items, title: 'Second Hand Electronics' } )
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/catalog', { title: 'Second Hand Electronics', error })
    }
})

router.get('/create', isAuth, (req, res) => {
    res.render('item/create', { title: 'Second Hand Electronics' })
})

router.post('/create', isAuth, async (req, res) => {
    const item = req.body
    const ownerId = req.user?._id

    try {
        await itemService.create(item, ownerId)
        res.redirect('/item/catalog')
    } catch (err) {
        const error = getErrorMassage(err)
        res.render('item/create', { item, title: 'Second Hand Electronics', error })
    }
})

router.get('/search', async (req, res) => {
    const query = req.query 

    try {
        const items = await itemService?.search(query).lean();  
        res.render('item/search', { items, query }); 

    } catch (err) {
        const error = getErrorMassage(err)
        return res.render('item/search', { items, error })
    }
})

router.get('/:itemId/details', async (req, res) => {
    const item = await itemService.getitem(req.params.itemId).lean()
    const isOwner = item.owner == req.user?._id;
    const owner = await getUserById(item.owner)

    const isVoted = item.userList?.some(userId => userId.toString() === req.user?._id)
    const voteCount = item.userList?.length || 0;

    const users = await getAllUsersByIds(item.userList)
    const userList = users.join(', ')

    res.render('item/details', { item, title: 'Second Hand Electronics', isOwner, owner, isVoted, voteCount, users, userList })

});

router.get('/:itemId/delete', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId 

    try {
        await itemService.remove(itemId)
        res.redirect('/item/catalog')
    } catch (err) {
        const error = getErrorMassage(err)
        return res.render('404', { title: '404 Page', error })
    }

})

router.get('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId 

    try {
        const item = await itemService.getById(itemId).lean()
        res.render('item/edit', { item, title: 'Second Hand Electronics' })
    } catch (err) {
        const error = getErrorMassage(err)
        return res.render('item/edit', { title: 'Second Hand Electronics', error })
    }
})

router.post('/:itemId/edit', isAuth, checkOwner, async (req, res) => {
    const itemId = req.params.itemId
    const item = req.body;

    try {
        await itemService.edit(itemId, item)
        res.redirect(`/item/${itemId}/details`)
    } catch (err) {
        const error = getErrorMassage(err)
        return res.render('item/edit', { item, title: 'Second Hand Electronics', error })
    }
})

router.get('/:itemId/like', isAuth, checkNotOwner, checkIsLiked, async (req, res) => {
    const { itemId } = req.params 
    const userId = req.user?._id 

    try {
        await itemService.like(itemId, userId)
        res.redirect(`/item/${itemId}/details`)
    } catch (err) {
        return res.redirect(`/item/catalog`)
    }
})

export default router;