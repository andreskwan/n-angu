(function() {
    //'gemStore' module depends on 'store-products' module 
  var app = angular.module('gemStore', ['store-products']);

  app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('%%');
    $interpolateProvider.endSymbol('%%');
  });

//why this module depends on $http
  app.controller('StoreController', ['$http', 
    //why this function needs the $http service? 
    function($http) {
        var store = this;
        $http.get('js/products.json')
            .success(function(data){
                // this callback will be called asynchronously
                // when the response is available    
                store.products = data; 
            })
            .error(
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            );
    }]);
  
  app.directive("pageNavigation", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
    };
  });
})();

