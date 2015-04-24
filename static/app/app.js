(function () {
    'use strict';
    
    var app = angular.module('app', [
        'ngAnimate',        // animations
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

        // Custom modules 
        'common',           // common functions, logger, spinner
        'common.bootstrap', // bootstrap dialog wrapper functions

        'ui.router',
        'angularMoment',
        'ui.bootstrap'
    ]);
    
    // Handle routing errors and success events
    app.run([function () {
        console.log('Application Started');
            // Include $route to kick start the router.
    }]);        
})();
