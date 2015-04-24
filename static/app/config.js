(function () {
    'use strict';

    var app = angular.module('app');

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };

    var ht = $("html");

    var config = {
        appErrorPrefix: '[Demo 24 Error] ', //Configure the exceptionHandler decorator
        docTitle: 'Demo24: ',
        events: events,
        version: '2.1.0',
        main: ht.attr("data-main"),
        about: ht.attr("data-about"),
        debug: ht.attr("data-debug") === "True",
        nav: ht.attr("data-navs")==="True",
        base:'/api/v1.0/',
        apiKey:'pDblTMZaFam59d@F9c#V1G9UEL17)Odz'
    };

    app.constant('config', config);
    
    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled && config.debug) {
            $logProvider.debugEnabled(true);
        }
    }]);
    
    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
    }]);
    //#endregion
})();