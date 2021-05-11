const Comment = require('../models/Comment');

module.exports = async (req, res, next) => {
    try {
        const { comment_id } = req.params;
        const comment = await Comment.findById(comment_id);
        if (!comment) {
            return res
                .status(400)
                .json({ msg: `Comment to delete not found.` });
        }
        if (!comment.user.equals(req.user.id)) {
            return res
                .status(401)
                .json({ msg: `You don't have permission to do that.` });
        }
        next();
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Comment not found' });
        }
        return res.status(500).send('Server error');
    }
};
