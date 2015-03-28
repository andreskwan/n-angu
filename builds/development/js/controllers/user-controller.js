(function(){
	angular.module('userModule', ['ngResource'])
	.factory("UserFactory",['$resource', 'Constantes',
		function($resource, Constantes){
			return $resource(Constantes.url+"/usuarios/:id/");
			// return $resource("/productos/:id/");
		}])
	.factory("RoleFactory",['$resource', 'Constantes',
		function($resource, Constantes){
			return $resource(Constantes.url+"/roles/:id/");
			// return $resource("/productos/:id/");
		}])
	.controller('UserController',['$http', '$scope', 'Constantes','UserFactory','RoleFactory',
		function($http, $scope, Constantes, UserFactory, RoleFactory){

			$scope.master = {};

	        RoleFactory.query(function (roles){
	        	// $scope.roles = [{id:"1","name":"Empresario"},{id:"2","name":"Empre"}];
	        	// debugger;
	        	$scope.roles = roles;
	        },function (error){
	        	console.log("Error.status",error.status);
	        });
	      $scope.update = function(user) {
	      	// product = {"producto":user};
        	console.log(user);
	      	// debugger;
	        UserFactory.save(function(user){
	        	console.log(postResult);
	        },function (error){
	        	console.log("Error.status",error.status);
	        });

	        // $http.post('/productos', product).
         //        success(function(data, status, headers, config) {
         //          // this callback will be called asynchronously
         //          // when the response is available
         //          // debugger;
         //        }).
         //        error(function(data, status, headers, config) {
         //          // called asynchronously if an error occurs
         //          // or server returns response with an error status.
         //          // debugger;
         //        });
	      };

	      $scope.reset = function() {
	        $scope.user = angular.copy($scope.master);
	      };

	      $scope.reset();
		}
	]);
	var gem = {name:"andres"};
})();