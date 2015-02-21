(function() {
    //'gemStore' module depends on 'store-products' module 
  var app = angular.module('gemStore',['ngRoute',
                                       'storeProducts']); 
                                      
  app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('%%');
    $interpolateProvider.endSymbol('%%');
  });

  //how to use this with directives?
  app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/products',
      {
        templateUrl: 'partials/products.html',
        controller: 'StoreController'
      }).
      otherwise({
        redirectTo:'/products'
      })
  }]);

  app.directive("pageNavigation", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
    };
  });

})();

