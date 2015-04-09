(function(){
	angular.module('gemStore')
	.controller('NotesIndexController', ['$http', '$scope',function($http,$scope){
		//TODO: I need to create this in mongoDB
		 $http({method:'GET', url:'/notes'})
        .success(function(data){
          $scope.notes = data;
      	})
      	.error(function(error){
      		console.log("$http - notes-controller REST: ",error);
      	});
	}]);
})();