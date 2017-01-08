var app = angular.module('myFirstApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller  : 'HomeController'
	})

	.when('/Schedule', {
		templateUrl : 'pages/schedule.html',
		controller  : 'ScheduleController'
	})

	.when('/Request', {
		templateUrl : 'pages/request.html',
		controller  : 'RequestController'
	})

	.otherwise({redirectTo: '/'});	
});

app.controller('HomeController', function($scope) {
	$scope.message = 'Hello from Home controller!';
});

app.controller('ScheduleController', function($scope) {
	$scope.message = 'Welcome this is the Schedule page!';
});

app.controller('RequestController', function($scope) {
	$scope.message = 'Welcome to the Request page';
});