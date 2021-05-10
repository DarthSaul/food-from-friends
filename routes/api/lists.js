const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const List = require('../../models/List');

// @route     POST api/lists
// @desc      Create a list
// @access    Private
router.post(
    '/',
    auth,
    check('city', 'City is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await User.findById(req.user.id).select('-password');
            const newList = new List({
                user: user.id,
                avatar: user.avatar,
                city: req.body.city,
                restaurants: req.body.restaurants
            });
            const list = await newList.save();
            res.json(list);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
