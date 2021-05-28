const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route     GET api/profile/me
// @desc      Get logged in user's profile
// @access    Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user', ['name', 'avatar']);
        if (!profile) {
            return res
                .status(400)
                .json({ msg: 'No profile found for logged in user' });
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route     POST api/profile/
// @desc      Create or update user profile
// @access    Private
router.post(
    '/',
    auth,
    check('location', 'Your location is required.').notEmpty(),
    check('bio', 'A short bio is required.').notEmpty(),
    async (req, res) => {
        // console.log(req.file);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            location,
            bio,
            favoriteCuisines,
            favoriteDishes,
            instagram,
            twitter,
            facebook
        } = req.body;

        const profileFields = {};
        profileFields.user = req.user.id;
        if (location) profileFields.location = location;
        if (bio) profileFields.bio = bio;
        if (favoriteCuisines) {
            profileFields.favoriteCuisines = favoriteCuisines
                .split(',')
                .map(el => el.trim());
        }
        if (favoriteDishes) {
            profileFields.favoriteDishes = favoriteDishes
                .split(',')
                .map(el => el.trim());
        }
        profileFields.social = {}; // Initialize first, or 'profileFields.social' is undefined
        if (instagram) profileFields.social.instagram = instagram;
        if (twitter) profileFields.social.twitter = twitter;
        if (facebook) profileFields.social.facebook = facebook;

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            // Update if there is existing profile
            if (profile) {
                // Update profile
                profile = await Profile.findByIdAndUpdate(
                    profile.id,
                    { ...profileFields },
                    { new: true }
                );
                return res.json(profile);
            }
            // If no existing profile, create new one
            profile = new Profile(profileFields);
            await profile.save();
            return res.json(profile);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server error');
        }
    }
);

// @route     GET api/profile
// @desc      Get all profiles
// @access    Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', [
            'name',
            'avatar'
        ]);
        return res.json(profiles);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

// @route     GET api/profile/user/:user_id
// @desc      Get profile by user id
// @access    Public
router.get('/user/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const profile = await Profile.findOne({
            user: user_id
        }).populate('user', ['name', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        return res.status(500).send('Server error');
    }
});

// @route     DELETE api/profile
// @desc      Delete profile, user & associated lists
// @access    Private
router.delete('/', auth, async (req, res) => {
    try {
        await Promise.all([
            List.deleteMany({ user: req.user.id }),
            Comment.deleteMany({ user: req.user.id }),
            Profile.findOneAndRemove({ user: req.user.id }),
            User.findOneAndRemove({ _id: req.user.id })
        ]);
        return res.json({ msg: 'User and profile deleted' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

// @route     PUT api/profile/restaurants
// @desc      Add favorite restaurants to profile
// @access    Private
router.put(
    '/restaurants',
    auth,
    check('name', 'Name is required').notEmpty(),
    check('location', 'Location is required').notEmpty(),
    check('rating', 'Rating is required').notEmpty(),
    check('review', 'Review is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, location, rating, review } = req.body;

        const newRestaurant = {
            name,
            location,
            rating,
            review
        };

        try {
            const profile = await Profile.findOne({ user: req.user.id });
            profile.favoriteRestaurants.push(newRestaurant);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server error');
        }
    }
);

// @route     DELETE api/profile/restaurants/:restaurant_id
// @desc      Delete favorite restaurant from profile
// @access    Private
router.delete('/restaurants/:restaurant_id', auth, async (req, res) => {
    const { restaurant_id } = req.params;
    try {
        let profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
            profile = await Profile.findByIdAndUpdate(
                profile.id,
                { $pull: { favoriteRestaurants: { _id: restaurant_id } } },
                { new: true }
            );
            return res.json(profile);
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

// @route     PUT api/profile/media
// @desc      Add favorite media to profile
// @access    Private
router.put(
    '/media',
    auth,
    check('title', 'Title is required').notEmpty(),
    check('type', 'Type is required').notEmpty(),
    check('description', 'Description is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, type, description } = req.body;
        const newMedia = {
            title,
            type: type.toLowerCase(),
            description
        };
        try {
            const profile = await Profile.findOne({ user: req.user.id });
            profile.favoriteMedia.push(newMedia);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server error');
        }
    }
);

// @route     DELETE api/profile/media/:media_id
// @desc      Delete media from profile
// @access    Private
router.delete('/media/:media_id', auth, async (req, res) => {
    const { media_id } = req.params;
    try {
        let profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
            profile = await Profile.findByIdAndUpdate(
                profile.id,
                { $pull: { favoriteMedia: { _id: media_id } } },
                { new: true }
            );
            return res.json(profile);
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

module.exports = router;
