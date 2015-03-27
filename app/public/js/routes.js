(function() {
    //this module depends on
    // 'store-products' module
    // 'ngRoute'
  angular.module('gemStore')
  //how to use this with directives?
  .config(['$routeProvider',function($routeProvider) {
    // debugger;
    $routeProvider.
      when('/create',
      {
        templateUrl: 'partials/product-create.html',
        controller: 'ProductCreateController'
      }).
      when('/user',
      {
        templateUrl: 'partials/user.html',
        controller: 'UserController'
      }).
      when('/products',
      {
        templateUrl: 'partials/products.html',
        controller: 'ProductsController'
      }).
      when('/products/:id',
      {
        templateUrl: 'partials/product.html',
        controller: 'ProductController'
      }).
      when('/index',
      {
        templateUrl: 'partials/index.html',
      }).
      when('/unal',
      {
        templateUrl: 'partials/unal.html',
      }).
      otherwise({
        redirectTo:'/products'
      });
  }]);
})();