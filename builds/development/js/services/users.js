(function(){
	angular.module('gemStore')
	.factory("UserFactory",['$resource', 'Constantes',
		function($resource, Constantes){
			//POST
			// return { create : function () {
			// 					 console.log("Constantes.url",Constantes.url);
			// 	                 return $resource(Constantes.url+"/usuarios/:id/");
			// 	             },
			// 	     all    : function () {
			// 	                 return $resource(Constantes.url+"/usuarios");
			// 	             }
			// 	   };
			return $resource(Constantes.url+"/usuarios/:id/");
		}])
	.factory("RoleFactory",['$resource', 'Constantes',
		function($resource, Constantes){
			return { create : function () {
				                 $resource(Constantes.url+"/roles/:id/");
				             },
				     all    : function () {
				     			 console.log("Constantes.url",Constantes.url);
				                 var obj = $resource(Constantes.url+"/roles/:id/");
				                 // debugger;
				                 return obj;
				             }
				   };
			// var obj = $resource(Constantes.url+"/roles/:id/");
			// debugger;
			// return obj;
			// return $resource("/productos/:id/");
		}]);
})();