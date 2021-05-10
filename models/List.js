const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    avatar: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    restaurants: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            review: {
                type: String
            }
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ]
});

module.exports = List = mongoose.model('List', listSchema);
