const mongoose = require('mongoose');
const { Schema } = mongoose;

const avatarSchema = new Schema({
    url: String,
    filename: String
});
avatarSchema.virtual('medium').get(function () {
    return this.url.replace('/upload', '/upload/w_500');
});
avatarSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_150');
});

const opts = { toJSON: { virtuals: true } };
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: avatarSchema,
        date: {
            type: Date,
            default: Date.now
        }
    },
    opts
);

module.exports = User = mongoose.model('User', userSchema);
