const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const User = require('../../models/User');

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
    '/',
    [
        check('name', 'Name is required.').notEmpty(),
        check('email', 'Please include a valid email.').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters.'
        ).isLength({ min: 6 })
    ],
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

            const newUser = new User({ name, email, password });

            // Encrypt using bcrypt
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);

            // Save new user
            await newUser.save();

            // Return JWT
            const payload = {
                user: {
                    id: newUser.id
                }
            };

            jwt.sign(
                payload,
                process.env.jwtSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
