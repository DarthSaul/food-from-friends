const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const isListOwner = require('../../middleware/isListOwner');
const isCommentOwner = require('../../middleware/isCommentOwner');

const Comment = require('../../models/Comment');
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
        const lists = await List.find()
            .populate('user', ['name', 'avatar'])
            .populate('comments', ['user', 'avatar', 'text']);
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

// @route     DELETE api/lists/:list_id
// @desc      Delete list by list id
// @access    Private
router.delete('/:list_id', auth, isListOwner, async (req, res) => {
    const { list_id } = req.params;
    try {
        await List.findByIdAndDelete(list_id);
        if (!list) {
            return res.status(400).json({ msg: 'List not found' });
        }
        return res.json({ msg: 'List deleted' });
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'List not found' });
        }
        return res.status(500).send('Server error');
    }
});

// @route     PUT api/lists/:list_id/like
// @desc      Like a list
// @access    Private
router.put('/:list_id/like', auth, async (req, res) => {
    try {
        const { list_id } = req.params;
        const list = await List.findById(list_id);
        const user = await User.findById(req.user.id);
        if (list.likes.some(el => el.id === user.id)) {
            return res.status(400).json({ msg: 'User already liked list' });
        }
        list.likes.push(user);
        await list.save();
        res.json(list.likes);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'List not found' });
        }
        return res.status(500).send('Server error');
    }
});

// @route     PUT api/lists/:list_id/unlike
// @desc      Unlike a list
// @access    Private
router.put('/:list_id/unlike', auth, async (req, res) => {
    try {
        const { list_id } = req.params;
        const list = await List.findById(list_id);
        const notLiked =
            list.likes.filter(el => el._id.toString() === req.user.id)
                .length === 0;
        if (notLiked) {
            return res.status(400).json({
                msg: 'Unable to unlike, user has not liked this list'
            });
        }
        const updatedList = await List.findByIdAndUpdate(
            list_id,
            { $pull: { likes: { _id: req.user.id } } },
            { new: true }
        );
        res.json(updatedList.likes);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'List not found' });
        }
        return res.status(500).send('Server error');
    }
});

// @route     POST api/lists/:list_id/comment
// @desc      Comment on a list
// @access    Private
router.post('/:list_id/comment', auth, async (req, res) => {
    try {
        const { list_id } = req.params;
        const list = await List.findById(list_id);
        const user = await User.findById(req.user.id);
        const comment = new Comment({
            user: user.id,
            avatar: user.avatar,
            text: req.body.text
        });
        list.comments.push(comment);
        await comment.save();
        await list.save();
        res.json(list);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'List not found' });
        }
        return res.status(500).send('Server error');
    }
});

// @route     DELETE api/lists/:list_id/comment/:comment_id
// @desc      Delete a comment from a list
// @access    Private
router.delete(
    '/:list_id/comment/:comment_id',
    auth,
    isCommentOwner,
    async (req, res) => {
        try {
            const { comment_id, list_id } = req.params;
            const list = await List.findByIdAndUpdate(list_id, {
                $pull: { comments: comment_id }
            });
            const comment = await Comment.findByIdAndDelete(comment_id);
            console.log(comment);
            res.json(list);
        } catch (err) {
            console.error(err.message);
            if (err.kind == 'ObjectId') {
                return res.status(400).json({ msg: 'List not found' });
            }
            return res.status(500).send('Server error');
        }
    }
);

module.exports = router;
