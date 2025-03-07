import { Schema, model, Types } from "mongoose";

const itemSchema = new Schema ({

    title: {
        type: String,
        required: [true, 'Title field is required'],
    },

    brand: {
        type: String,
        required: [true, 'Brand field is required'],
    },

    price: {
        type: Number,
        required: [true, 'Price field is required'],
    },

    image: {
        type: String,
        required: [true, 'Image field is required'],
    },

    description: {
        type: String,
        required: [true, 'Description field is required'],
    },

    userList: [{
        type: Types.ObjectId,
        ref: 'User'
    }],

    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }

})

const Item = model('Item', itemSchema)

export default Item