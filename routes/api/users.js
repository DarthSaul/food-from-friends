const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
    '/',
    check('name', 'Name is required.').notEmpty(),
    check('email', 'Please include a valid email.').isEmail(),
    check(
        'password',
        'Please enter a password with 6 or more characters.'
    ).isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body; // Destructure

        try {
            const user = await User.findOne({ email }); // See if user exists
            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'User already exists.' }] }); // Match format from above for reusability on frontend!
            }

            // Get users gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            const newUser = new User({ name, email, avatar, password });

            // Encrypt using bcrypt
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);

            // Save new user
            await newUser.save();

            res.send('User registered.');
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
