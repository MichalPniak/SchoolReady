const bookshelf = require('../config/bookshelf');

const User = bookshelf.model('User', {
    tableName: 'users'
});

module.exports.create = (user) => {
    return new User({
        firnam: user.firnam,
        lasnam: user.lasnam,
        pesel_: user.pesel_,
        ur_dat: user.ur_dat,
    }).save();
};