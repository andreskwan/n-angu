(function(){
	angular.module('gemStore')
	.controller('NWUserIndexController', ['$http', '$scope','Gravatar',
    function($http,$scope,Gravatar){
    // debugger;
     $http({method:'GET', url:'/usuarios'})
        .success(function(data){
          // debugger;
          $scope.users = data;
        })
        .error(function(error){
          console.log("$http - users-controller REST: ",error);
        });
    $scope.gravatarUrl = function(user){
                            debugger;
                            return GravatarProvider(user.email);
                          };
	}]);
})();