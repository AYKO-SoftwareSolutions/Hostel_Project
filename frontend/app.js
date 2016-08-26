var hostel = angular.module("hostel", ['ngRoute'])


	//CONFIG
	hostel.config(function ($routeProvider){

		$routeProvider

		.when('/', {
			templateUrl : 'html/login.html',
			controller : 'loginController'
		})

		.when('/hostelList', {
			templateUrl : 'html/hostelList.html',
			controller : 'loginController'
		})		

        .when('/createHostel', {
			templateUrl : 'html/createHostel.html',
			controller : 'loginController'
		})
        
		.otherwise({
			redirectTo: '/'
		})
	});
	