(function(){
  angular.module('gemStore')
  //why this module depends on $http
  .controller('ProductController', ['$http', '$scope','$routeParams',
    //why this function needs the $http service?
    function($http, $scope, $routeParams) {
        var store = this;
        // debugger;
        // Simple GET request example
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
          });
    }
  ])
  .controller('ProductCreateController', ['$http',
    //why this function needs the $http service?
    function($http) {
        var controller = this;
        // Simple GET request example
        this.saveProduct =  function(product){
              // debugger;
              product = {"producto":product};
              console.log(product)
              // $http({method:"POST",url:'/productos/', data:product});
              // product = JSON.stringify(product);
              $http.post('/productos', product).
                success(function(data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                  // debugger;
                }).
                error(function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  // debugger;
                });
                // $http({method:"POST",url:'/productos/', data:product});
                // product.reviews.push(this.review);
                // this.review = {};
        };
    }
  ]);
})();