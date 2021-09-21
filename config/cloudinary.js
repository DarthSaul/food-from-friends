if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const config = require('config');
// const cloudName = config.get('CLOUDINARY_CLOUD_NAME');
// const key = config.get('CLOUDINARY_KEY');
// const secret = config.get('CLOUDINARY_SECRET');
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
