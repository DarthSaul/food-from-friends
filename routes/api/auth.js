const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route     GET api/auth
// @desc      Test route
// @access    Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        return res.json(user);
    } catch (err) {
        console.error(err.messsage);
        return res.status(500).send('Server error');
    }
});

// @route     POST api/auth
// @desc      Authenticate user & get token
// @access    Public
router.post(
    '/',
    check('email', 'Please include a valid email.').isEmail(),
    check('password', 'Password is required.').exists(),
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

            // Return jwt
            const payload = {
                user: {
                    id: newUser.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
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
