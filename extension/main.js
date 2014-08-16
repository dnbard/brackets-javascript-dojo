define(function (require, exports, module) {
    require('./DAL/service').init();

    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        iconService = require('./services/icon'),
        modalService = require('./services/modal');

    ExtensionUtils.loadStyleSheet(module, 'styles/main.css');
    ExtensionUtils.loadStyleSheet(module, 'styles/awesome.css');

    iconService.init();
    iconService.click(modalService.showHandler);
    
    //require('./services/onlineTracking').init();
});
