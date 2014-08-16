define(function(require, exports, module){
    var pages = ['welcome'],
        _ = require('../vendor/lodash'),
        result = {};

    _.each(pages, function(page){
        result[page.toUpperCase()] = page.toUpperCase();
    });

    module.exports = result;
});
