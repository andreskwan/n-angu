(function(){
	angular.module('PerfilModule', ['ngResource'])
	.factory("PerfilFactory",['$resource', 'Constantes',
		function($resource, Constantes){
			return $resource(Constantes.url+"/usuarios/:id/")
			// return $resource("/productos/:id/");
		}])
	.controller('PerfilController',['$http', '$scope', 'Constantes','PerfilFactory',
		function($http, $scope, Constantes, PerfilFactory){
			// this.perfil =
			// $scope.perfil = {"name":"andres"};
			// alert("Welcome");
			// debugger;
			// var datosQuery = PerfilFactory.query(function (){
			// 	// $scope.datos = datosQuery;
			// 	console.log(datosQuery);
			// });

			// var datosGet = PerfilFactory.get({id:2}, function(){
			// 	// $scope.datos = datosGet;
			// 	console.log(datosGet);
			// });

			// console.log("gemStore.Constantes:",gemStore.Constantes)
			$scope.master = {};

	      $scope.update = function(user) {
	      	// debugger;
	      	// product = {"producto":user};
        	// console.log(product);

	        var postResult = PerfilFactory.save(user)
	        console.log(postResult);

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