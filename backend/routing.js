var user = require('./controllers/user');

function init(app){
    app.route('/user/:login/:password')
        .post(user.register);
}

exports.init = init;
