define(function(require, exports, module){
    var path = module.uri.replace('config.js', '');
    
    exports.path = path;
    exports.serviceUrl = 'http://localhost:3000/';
});
