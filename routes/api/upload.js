const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage, cloudinary } = require('../../config/cloudinary');
let upload = multer({ storage });

const User = require('../../models/User');

const auth = require('../../middleware/auth');

// @route     POST upload
// @desc      Upload image + save path to model
// @access    Private
router.post('/', upload.single('file'), auth, async (req, res) => {
    const { filename, originalname, path: url } = req.file;
    try {
        const user = await User.findById(req.user.id);
        if (user.avatar) {
            await cloudinary.uploader.destroy(user.avatar.filename);
        }
        user.avatar = {
            url,
            filename,
            originalname
        };
        await user.save();
        return res.json(req.file);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

module.exports = router;
