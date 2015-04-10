(function(){
	angular.module('gemStore')
	.controller('NotesShowController', ['$routeParams','$http', function($http, $routeParams){
		var controller = this;
		//I need to create this in mongoDB
		 $http({method:'GET', url:'/notas/'+$routeParams.id})
        .success(function(data){
          controller.notes = data;
      	})
      	.error(function(error){
      		console.log("$http - notes-controller REST: ",error);
      	});
	}]);
})();