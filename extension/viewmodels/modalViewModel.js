var DocumentManager = require('document/DocumentManager');

define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        _ = require('../vendor/lodash'),
        config = require('../config'),
        fs = require('../services/filesystem'),
        guid = require('../services/guid'),
        icon = require('../services/icon'),
        storage = require('../services/storage'),
        path = config.path + 'cache/';
    
    function ModalViewModel(dialog){
        var self = this;
        this.dialog = dialog;

        this.openDocument = function(model){
            DocumentManager.getDocumentForPath(path + model.id + '.css')
                .done(_.bind(function(document){
                    DocumentManager.setCurrentDocument(document);
                    this.close();
                }, self));
        }
    }

    ModalViewModel.prototype.close = function(){
        $('.modal-wrapper').remove();
        icon.reset();
    }

    module.exports = ModalViewModel;
});
