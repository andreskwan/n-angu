//show one note
(function(){
	angular.module('gemStore')
	.controller('NotesShowController', ['$routeParams','$http', 'Note','$scope',
		function($http, $routeParams,$scope, Note){
		var controller = this;
		//I need to create this in mongoDB
		debugger;
		 // $http({method:'GET', url:'/notas/'+$routeParams.id})
		$scope.note = Note.get({id:$routeParams.id})
        .success(function(data){
          controller.notes = data;
      	})
      	.error(function(error){
      		console.log("$http - notes-controller REST: ",error);
      	});
	}]);
})();