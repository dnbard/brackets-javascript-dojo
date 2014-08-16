define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        DAL = require('../DAL/service').getInstance();

    ExtensionUtils.loadStyleSheet(module, '../styles/welcome.css');

    function WelcomeViewModel(){
        var self = this;

        this.username = ko.observable('');
        this.password = ko.observable('');

        this.isButtonEnabled = ko.computed(function(){
            return (this.username()+'').length > 0 &&
                (this.password()+'').length > 0;
        }, this);

        this.onRegisterClick = function(){
            if (!self.isButtonEnabled()){
                return;
            }

            DAL.user.register(this.username(), this.password())
                .success(function(){
                    console.log(arguments);
                })
                .error(function(){
                    console.log(arguments);
                });
        }
    }

    module.exports = WelcomeViewModel;
});
