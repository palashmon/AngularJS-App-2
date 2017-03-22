(function() {
    'use strict';

    angular
        .module('app.pages')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/home',
                config: {
                    templateUrl: 'pages/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    title: 'Home',
                    settings: {
                        nav: 1,
                        content: 'Home'
                    }
                }
            },
			
			{
                url: '/request',
                config: {
                    templateUrl: 'pages/request.html',
                    controller: 'RequestController',
                    controllerAs: 'vm',
                    title: 'Request',
                    settings: {
                        nav: 2,
                        content: 'Request'
                    }
                }
            },
			
			{
                url: '/schedule',
                config: {
                    templateUrl: 'pages/schedule.html',
                    controller: 'ScheduleController',
                    controllerAs: 'vm',
                    title: 'Schedule',
                    settings: {
                        nav: 3,
                        content: 'Schedule'
                    }
                }
            }
        ];
    }
})();