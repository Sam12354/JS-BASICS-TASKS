import Item from "../models/item.js";

export const itemService = {

    getAll(query = {}){
        let items = Item.find()
        
        if(query.name){
            items.find({ name: { $regex: query.name, options: 'i' }})
        }

        return items
    },

    create(data, ownerId){
        return Item.create({ ...data, owner: ownerId })
    },

    remove(itemId){
        return Item.findByIdAndDelete(itemId)
    },

    getitem(itemId){
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
            { $addToSet: { userList: userId } }
        )
    },
    
    search(query = {}) {
        let filter = {};
    
        if (query.name) {
            filter.name = { $regex: query.name, $options: 'i' };
        }
    
        if (query.type) {
            filter.type = { $regex: query.type, $options: 'i' };
        }
    
        return Item.find(filter);
    }

}
