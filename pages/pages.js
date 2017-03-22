(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('HomeController', HomeController)
		.controller('ScheduleController', ScheduleController)
		.controller('RequestController', RequestController);
	
	var inject = ['$timeout']
	HomeController.$inject = inject;
	ScheduleController.$inject = inject;
	RequestController.$inject = inject;
	
    /* @ngInject */
    function HomeController($timeout) {
        var vm = this;
        vm.title = 'Home';
		vm.message = 'Hello from Home controller!';
		vm.showSplash = true;
		vm.busyMessage = 'Please wait ...';
		
		activate();
	
		function activate() {
			//Force a 1 second delay so we can see the splash.
			$timeout(function() {
				vm.showSplash = false;
			}, 1500);
		}
    }
	
	function ScheduleController($timeout) {
        var vm = this;
        vm.title = 'Schedule';
		vm.message = 'Welcome this is the Schedule page!';
		vm.showSplash = true;		
		vm.busyMessage = 'Please wait ...';
		
		activate();
	
		function activate() {
			//Force a 1 second delay so we can see the splash.
			$timeout(function() {
				vm.showSplash = false;
			}, 1500);
		}
    }
	
	function RequestController($timeout) {
        var vm = this;
        vm.title = 'Request';
		vm.message = 'Welcome to the Request page';
		vm.showSplash = true;		
		vm.busyMessage = 'Please wait ...';
		
		activate();
	
		function activate() {
			//Force a 1 second delay so we can see the splash.
			$timeout(function() {
				vm.showSplash = false;
			}, 1500);
		}
    }
		
})();