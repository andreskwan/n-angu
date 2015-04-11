(function(){
	angular.module('gemStore')
	.controller('NWUserIndexController', ['$http', '$scope',function($http,$scope){
		//TODO: I need to create this in mongoDB
    debugger;
		 $http({method:'GET', url:'/usuarios'})
        .success(function(data){
          debugger;
          $scope.notes = data;
      	})
      	.error(function(error){
      		console.log("$http - notes-controller REST: ",error);
      	});
	}]);
})();