const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    favoriteCuisines: {
        type: [String]
    },
    favoriteDishes: {
        type: [String]
    },
    favoriteRestaurants: [
        {
            name: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            review: {
                type: String,
                required: true
            }
        }
    ],
    favoriteMedia: [
        {
            title: {
                type: String,
                required: true
            },
            type: {
                type: String,
                enum: [
                    'movie',
                    'series',
                    'show',
                    'book',
                    'newspaper',
                    'magazine',
                    'column',
                    'other'
                ],
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    social: {
        instagram: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('Profile', profileSchema);
