import { itemService } from "../services/itemService.js"

export const checkOwner = async (req, res, next) => {
    const itemId = req.params.itemId 
    const item = await itemService.getById(itemId)

    if(item.owner == req.user?._id){
        return next()
    }else{
        res.render('404', {error: 'You are not authorized'})
    }

}

export const checkNotOwner = async (req, res, next) => {
    const itemId = req.params.itemId 
    const item = await itemService.getById(itemId)

    if(item.owner != req.user?._id){
        return next()
    }else{
        res.render('404', {error: 'You are not authorized'})
    }

}

export const checkIsLiked = async (req, res, next) => {
    const { itemId } = req.params 
    const userId = req.user?._id 

    try {
        const item = await itemService.getById(itemId).lean()

        if(item?.userList?.includes(userId)){
            return res.redirect(`/item/${itemId}/details`)
        }
        next()

    } catch (err) {
        console.log(err);
    }
}