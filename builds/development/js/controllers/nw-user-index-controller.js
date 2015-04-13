(function(){
	angular.module('gemStore')
	.controller('NWUserIndexController', ['$http', '$scope','Gravatar',
    function($http,$scope,Gravatar){
    // debugger;
     $http({method:'GET', url:'/usuarios'})
        .success(function(data){
          // debugger;
          $scope.notes = data;
        })
        .error(function(error){
          console.log("$http - notes-controller REST: ",error);
        });
    $scope.gravatarUrl = function(user){
                            return GravatarProvider(user.email);
                          };
	}]);
})();