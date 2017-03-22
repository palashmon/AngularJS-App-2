(function() {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appTitle: 'AngularJS App 2'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure ($routeProvider, routehelperConfigProvider) {

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        routehelperConfigProvider.config.docTitle = 'AngularJS App 2: ';
    }
})();