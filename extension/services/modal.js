define(function(require, exports){
    var Dialogs = brackets.getModule('widgets/Dialogs'),
        _ = require('../vendor/lodash'),
        modalTemplate = _.template(require('text!../templates/modal.html'), {
            welcome: require('text!../templates/welcome.html')
        }),
        ko = require('../vendor/knockout'),
        ModalViewModel = require('../viewmodels/modalViewModel');
    
    function showHandler(){
        var dlg = Dialogs.showModalDialogUsingTemplate(modalTemplate)._$dlg;
        
        ko.applyBindings(new ModalViewModel(dlg), dlg[0]);
    }
    
    exports.showHandler = showHandler;
});
