import { Schema, model, Types } from "mongoose";

const itemSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name field is required'],
        minLength: [2, 'Name must be at least 2 characters']
    },

    category: {
        type: String,
        required: [true, 'Category field is required'],
        minLength: [3, 'Category must be at least 3 characters']
    },

    color: {
        type: String,
        required: [true, 'Color field is required'],
        minLength: [2, 'Color must be at least 2 characters']
    },

    image: {
        type: String,
        required: [true, 'Image field is required'],
        validate: /^https?:\/\//
    },

    location: {
        type: String,
        required: [true, 'Location field is required'],
        minLength: [5, 'Location must be at least 5 characters long'],
        maxLength: [15, "Location can't be longer than 15 characterss"]
    },

    formula: {
        type: String,
        required: [true, 'Formula field is required'],
        minLength: [3, 'Formula must be at least 3 characters long'],
        maxLength: [30, "Formula can't be longer than 30 characterss"]
    },

    description: {
        type: String,
        required: [true, 'Description field is required'],
        minLength: [10, 'Description must be at least 10 characters long'],
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