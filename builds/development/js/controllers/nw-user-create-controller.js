(function(){
	angular.module('gemStore')
	.controller('NWUserCreateController', 
		['$scope','NWUserFactory',function($scope,NWUserFactory) {
			// debugger;
		  $scope.saveUser = function(user){
		    // $http({method: 'POST', url: '/usuarios', data: user});
		    // I pass the user object and the returned user from server
		    console.log(user);
		    var newUser = {usuario:user};
		    // debugger;
		    NWUserFactory.save(newUser, function(user){
		        	console.log(user);
		        	// debugger;
		        },function (error){
		        	console.log("Error.status",error.status);
		        	console.log("Error",error);
		        	// debugger;
		        });
		 };
	}]);
})();