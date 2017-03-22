(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngRoute', 'ngSanitize',
        /*
         * Our reusable cross app code modules
         */
        'blocks.router'
    ]);
})();