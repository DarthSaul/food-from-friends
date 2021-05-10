const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const isListOwner = require('../../middleware/isListOwner');

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

// @route     GET api/lists
// @desc      Get all lists
// @access    Public
router.get('/', async (req, res) => {
    try {
        const lists = await List.find().populate('user', ['name', 'avatar']);
        return res.json(lists);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

// @route     GET api/lists/:list_id
// @desc      Get list by list id
// @access    Public
router.get('/:list_id', async (req, res) => {
    const { list_id } = req.params;
    try {
        const list = await List.findById(list_id).populate('user', [
            'name',
            'avatar'
        ]);
        if (!list) {
            return res.status(400).json({ msg: 'List not found' });
        }
        return res.json(list);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'List not found' });
        }
        return res.status(500).send('Server error');
    }
});

// @route     DELETE api/list/:list_id
// @desc      Delete list by list id
// @access    Private
router.delete('/:list_id', auth, isListOwner, async (req, res) => {
    const { list_id } = req.params;
    try {
        await List.findByIdAndDelete(list_id);

        return res.json({ msg: 'List deleted' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

module.exports = router;
