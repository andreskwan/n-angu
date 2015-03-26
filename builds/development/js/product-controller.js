(function(){
  angular.module('productModule', [])
  //why this module depends on $http
  .controller('ProductController', ['$http', '$scope','$routeParams',
    //why this function needs the $http service?
    function($http, $scope, $routeParams) {
        var store = this;
        // debugger;
        // Simple GET request example :
        $http.get('/productos/' + $routeParams.id).
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            // debugger;
            data = data['productos'][0];
            $scope.product = data;
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            debugger;
          });
        // $http({method:'GET', url: '/productos/' + $routeParams.id})
        //   .success(function (data){
        //             debugger;
        //             data = data['productos'];
        //             $scope.product  = data;
        //             // $scope.gemsOrder = 'name';
        //   })
        //   .error(
        //         // called asynchronously if an error occurs
        //         // or server returns response with an error status.
        //   );
         }
  ]);
})();