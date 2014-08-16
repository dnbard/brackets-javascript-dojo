var mongoose = require('mongoose'),
    User = mongoose.model('users'),
    _ = require('lodash');

function registerUser(req, res){
    var login = req.params.login,
        password = req.params.password;

    if (!login || !password){
        res.status(400).send('Login and password must be specified');
        return;
    }

    var user = new User({
        login: login
    });

    user.save(function(err, user){
        if (err){
            res.status(500).send(err);
        }
        return res.send(user);
    });
}

module.exports = {
    register: registerUser
};
