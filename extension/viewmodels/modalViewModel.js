var DocumentManager = require('document/DocumentManager');

define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        _ = require('../vendor/lodash'),
        config = require('../config'),
        fs = require('../services/filesystem'),
        guid = require('../services/guid'),
        icon = require('../services/icon'),
        storage = require('../services/storage'),
        path = config.path + 'cache/',
        WelcomeViewModel = require('./welcomeViewModel'),
        Pages = require('../enums/pages');
    
    function ModalViewModel(dialog){
        var self = this;

        this.welcome = new WelcomeViewModel();

        this.dialog = dialog;
        this.currentPage = ko.observable(null);

        this.user = ko.observable(storage.get()['user'] || null);

        this.openDocument = function(model){
            DocumentManager.getDocumentForPath(path + model.id + '.css')
                .done(_.bind(function(document){
                    DocumentManager.setCurrentDocument(document);
                    this.close();
                }, self));
        }

        this.init = function(){
            if (this.user() === null){
                this.currentPage(Pages.WELCOME);
            }
        }

        this.isPageVisible = function(page){
            return this.currentPage() === page;
        }

        this.init();
    }

    ModalViewModel.prototype.close = function(){
        $('.modal-wrapper').remove();
        icon.reset();
    }

    module.exports = ModalViewModel;
});
