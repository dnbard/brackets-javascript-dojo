define(function(require, exports, module){
    var path = require('../config').serviceUrl,
        controller = 'user',
        _ = require('../vendor/lodash');

    function register(login, password){
        return $.ajax(_.template('${path}${controller}/${login}/${password}', {
            path: path,
            controller: controller,
            login: login,
            password: password
        }),{
            type: 'POST'
        });
    }

    module.exports = {
        register: register
    };
});
