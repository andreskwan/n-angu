(function(){
	angular.module('userModule', [])
	.controller('UserController',['$http', '$scope', 'Constantes','UserFactory','RoleFactory',
		function($http, $scope, Constantes, UserFactory, RoleFactory){
	        RoleFactory.all().query(function (roles){
	        	// $scope.roles = [{id:"1","name":"Empresario"},{id:"2","name":"Empre"}];
	        	// debugger;
	        	$scope.roles = roles;
	        },function (error){
	        	console.log("Error.status",error.status);
	        });
	    //     RoleFactory.all()
	    //     	.success(function (roles){
					// debugger;
		   //      	$scope.roles = roles;
	    //     	})
	    //     	.error(function (error){
	    //     		debugger;
	    //     		console.log("Error.status",error.status);
	    //     	});
	      $scope.update = function(user) {
	      	// product = {"producto":user};
        	console.log(user);
	      	// debugger;
	        UserFactory.save(function(user){
	        	console.log(postResult);
	        },function (error){
	        	console.log("Error.status",error.status);
	        });
	      };
		  $scope.master = {};
	      $scope.reset = function() {
	        $scope.user = angular.copy($scope.master);
	      };
	      $scope.reset();
		}
	]);
	var gem = {name:"andres"};
})();