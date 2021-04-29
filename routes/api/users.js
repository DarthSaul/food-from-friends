const express = require('express');
const router = express.Router();

// @route     GET api/users
// @desc      Register user
// @access    Public
router.post('/', (req, res) => {
    console.log(req.body);
    return res.send('User route');
});

module.exports = router;
