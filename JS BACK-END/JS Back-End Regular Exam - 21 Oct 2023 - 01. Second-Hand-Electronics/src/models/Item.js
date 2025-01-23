import { Schema, model, Types } from "mongoose";


const itemSchema = new Schema ({

    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [10, 'Name field must be at least 10 characters']
    },

    type: {
        type: String,
        required: [true, 'Type is required'],
        minLength: [2, 'Type field must be at least 2 characters']
    },

    damages: {
        type: String,
        required: [true, 'Damages is required'],
        minLength: [10, 'Damage field must be at least 10 characters']
    },

    image: {
        type: String,
        required: [true, 'Image is required'],
        validate: /^https?:\/\//
    },

    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description field must be at least 10 characters long'],
        maxlength: [200, 'Description field must not exceed 200 characters']
    },

    production: {
        type: Number,
        required: [true, 'Productiong is required'],
        minlength: [1900, 'The year must be at least 1900'],
        maxLength: [2023, 'The year cant exceed 2023']
    },

    exploitation: {
        type: Number,
        required: [true, 'Exploitation field is required'],
        min: [1, 'Exploitation must be a positive number']
    },

    price: {
        type: Number,
        required: [true, 'Price field is required'],
        min: [1, 'Price must be a positive number']
    },

    userList: {
        type: Types.ObjectId,
        ref: 'User'
    },

    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },

})

const Item = model('Item', itemSchema)

export default Item