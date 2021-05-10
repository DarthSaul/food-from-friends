const List = require('../models/List');

module.exports = async (req, res, next) => {
    const { list_id } = req.params;
    const list = await List.findById(list_id);
    if (!list.user.equals(req.user.id)) {
        return res
            .status(401)
            .json({ msg: `You don't have permission to do that.` });
    }
    next();
};
