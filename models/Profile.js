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
        type: String
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
