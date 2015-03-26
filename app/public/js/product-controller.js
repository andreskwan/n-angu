(function(){
  angular.module('productModule', [])
  //why this module depends on $http
  .controller('ProductController', ['$http', '$scope','$routeParams',
    //why this function needs the $http service?
    function($http, $scope, $routeParams) {
        var store = this;
        debugger;
        $http({method:'GET', url: '/productos/' + $routeParams.id})
          .success(function (data){
                    debugger;
                    data = data['productos'];
                    $scope.product  = data;
                    // $scope.gemsOrder = 'name';
          })
          .error(
                // called asynchronously if an error occurs
                // or server returns response with an error status.
          );
        }
    ]);
})();