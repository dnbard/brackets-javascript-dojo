define(function(require, exports, module){
    var _ = require('../vendor/lodash'),
        modules = {
            user: require('./user')
        };

    function DALService(){
        var self = this;

        _.each(modules, function(module, moduleName){
            self[moduleName] = module;
        });
    }

    var instance = new DALService();
    module.exports = {
        getInstance: function(){
            return instance;
        },
        init: function(){ }
    };
});
