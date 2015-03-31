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
        templateUrl: 'templates/products/product-create.html',
        controller: 'ProductCreateController'
      }).
      when('/user',
      {
        templateUrl: 'templates/user/user.html',
        controller: 'UserController'
      }).
      when('/products',
      {
        templateUrl: 'templates/products/products.html',
        controller: 'ProductsController'
      }).
      when('/products/:id',
      {
        templateUrl: 'templates/products/product.html',
        controller: 'ProductController'
      }).
      when('/index',
      {
        templateUrl: 'templates/index.html',
      }).
      when('/unal',
      {
        templateUrl: 'templates/unal.html',
      }).
      otherwise({
        redirectTo:'/products'
      });
  }]);
})();