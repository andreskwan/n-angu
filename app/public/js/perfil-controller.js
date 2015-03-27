(function(){
	angular.module('PerfilModule', ['gemStore'])
	.controller('PerfilController',['$http', '$scope', 'Constantes',
		function($http, $scope, Constantes){
			// this.perfil = 
			// $scope.perfil = {"name":"andres"};
			// alert("Welcome");
			debugger;
			console.log("gemStore.Constantes:",gemStore.Constantes)
			$scope.master = {};

	      $scope.update = function(user) {
	      	// debugger;
	      	product = {"producto":user};
             console.log(product);
	        $http.post('/productos', product).
                success(function(data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                  // debugger;
                }).
                error(function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  // debugger;
                });
	      };

	      $scope.reset = function() {
	        $scope.user = angular.copy($scope.master);
	      };

	      $scope.reset();
		}
	]);
	var gem = {name:"andres"};
})();