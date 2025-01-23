import Item from "../models/Item.js"

export const itemService = {

    getAll(query = {}){

        let items = Item.find()

        if(query.name){
            items.find({ name: { $regex: query.name, $options: 'i' } })
        }

        if(query.platform){
            items.find({ platform: { $regex: query.platform, options: 'i' } })
        }

        return items

    },

    create(data, ownerId){
        return Item.create({ ...data, owner: ownerId })
    },

    remove(itemId){
        return Item.findByIdAndDelete(itemId)
    },

    getItem(itemId){
        return Item.findById(itemId)
    },

    edit(itemId, data){
        return Item.findByIdAndUpdate(itemId, data, { runValidators: true })
    },

    getById(itemId){
        return Item.findById(itemId).populate('userList')
    },

    like(itemId, userId){
        return Item.findByIdAndUpdate(
            itemId,
        { $addToSet: { userList: userId } },
        { new: true }
        )
    },

    search(query = {}){

        let filter = {}

        if(query.name){
            filter.name = { $regex: query.name, $options: 'i' }
        }

        if(query.platform){
            filter.platform = { $regex: query.platform, $options: 'i' }
        }

        return Item.find(filter)

    }

}