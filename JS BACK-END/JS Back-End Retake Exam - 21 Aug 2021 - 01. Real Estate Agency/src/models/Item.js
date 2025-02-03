import { Schema, model, Types } from "mongoose";

const itemSchema = new Schema ({

    name: {
        type: String,
        required: [true, 'Name field is required'],
        minLength: [6, 'Name must be at least 6 characters long']
    },

    type: {
        type: String,
        required: [true, 'Type field is required'],
        enum: ["Apartment", "Villa", "House"]
    },

    year: {
        type: Number,
        required: [true, 'Year field is required'],
        min: [1850, 'The Year should be between 1850 and 2021'],
        max: [2021, 'The Year should be between 1850 and 2021']
    },

    city: {
        type: String,
        required: [true, 'City field is required'],
        minLength: [4, 'City must be at least 4 characters long']
    },

    image: {
        type: String,
        required: [true, 'Image field is required'],
        validate: /^https?:\/\//
    },

    description: {
        type: String,
        required: [true, 'Description field is required'],
        maxLength: [60, 'Description should be a maximum of 60 characters long']
    },

    pieces: {
        type: Number,
        required: [true, 'Pieces field is required'],
        min: [0, 'Available Pieces should be positive number (from 0 to 10)'],
        max: [10, 'Available Pieces should be positive number (from 0 to 10)']
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