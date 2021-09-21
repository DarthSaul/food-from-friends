const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const key = process.env.CLOUDINARY_KEY;
const secret = process.env.CLOUDINARY_SECRET;

cloudinary.config({
    cloud_name: cloudName,
    api_key: key,
    api_secret: secret
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Food-From-Friends',
        allowedFormats: ['jpeg', 'jpg', 'png', 'svg']
    }
});

module.exports = { cloudinary, storage };
