'use strict';

angular.module("hostel")

	.controller('loginController', ['$scope', '$http', '$location', function($scope, $http, $location) {

		$scope.sub = function (){ 

			var reqData = {
				userName : $scope.name,
				password : $scope.password
			};

			$http.post('http://localhost:1337/login/loginUser', reqData)
				.success(function (data) {
					$location.path('/hostelList')
				})
				.error(function (err) {
					$scope.msg = err;
				})
		};
	}]);