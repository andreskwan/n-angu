(function(){
	angular.module('gemStore')
	.controller('NotesController', ['$http', function($http){
		var controller = this;
		//I need to create this in mongoDB
		 $http({method:'GET', url:'/notes'})
        .success(function(data){
          controller.notes = data;
      	})
      	.error(function(error){
      		console.log("$http - notes-controller REST: ",error);
      	});
	}]);
})();