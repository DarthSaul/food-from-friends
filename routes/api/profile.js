const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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
    async (req, res) => {
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

module.exports = router;
