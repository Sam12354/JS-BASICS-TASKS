import { Schema, model, Types } from "mongoose";

const itemSchema = new Schema({

    name: {
        type: String, 
        required: [true, 'Name field is required'],
        minLength: [4, 'Name field must be at least 4 characters long']
    },

    image: {
        type: String, 
        required: [true, 'Image field is required'],
        validate: /^https?:\/\//
    },

    price: {
        type: Number, 
        required: [true, 'Price field is required'],
        min: [0.00, 'Price must be a positive number']
    },

    description: {
        type: String, 
        required: [true, 'Description field is required'],
        minLength: [10, 'Description field must be at least 10 characters long']
    },

    genre: {
        type: String, 
        required: [true, 'Genre field is required'],
        minLength: [2, 'Genre field must be at least 2 characters long']
    },

    platform: {
        type: String, 
        required: [true, 'Platform field is required'],
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    },

    userList: [{
        type: Types.ObjectId, 
        ref: 'User',
    }],

    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }

})

const Item = model('Item', itemSchema)

export default Item