(function(){
	angular.module('UserModule', ['ngResource'])
	.factory("UserFactory",['$resource', 'Constantes',
		function($resource, Constantes){
			return $resource(Constantes.url+"/usuarios/:id/")
			// return $resource("/productos/:id/");
		}])
	.controller('UserController',['$http', '$scope', 'Constantes','UserFactory',
		function($http, $scope, Constantes, UserFactory){
			// this.perfil =
			// $scope.perfil = {"name":"andres"};
			// alert("Welcome");
			// debugger;
			// var datosQuery = UserFactory.query(function (){
			// 	// $scope.datos = datosQuery;
			// 	console.log(datosQuery);
			// });

			// var datosGet = UserFactory.get({id:2}, function(){
			// 	// $scope.datos = datosGet;
			// 	console.log(datosGet);
			// });

			// console.log("gemStore.Constantes:",gemStore.Constantes)
			$scope.master = {};

	      $scope.update = function(user) {
	      	// debugger;
	      	// product = {"producto":user};
        	// console.log(product);
	        UserFactory.save(function(user){
	        	console.log(postResult);
	        },function (error){
	        	console.log("Error.status",error.status);
	        })


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