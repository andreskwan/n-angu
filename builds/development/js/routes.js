(function() {
    //this module depends on
    // 'store-products' module
    // 'ngRoute'
  angular.module('gemStore')
  //how to use this with directives?
  .config(['$routeProvider',function($routeProvider) {
    // debugger;
    $routeProvider.
    when('/notes',
      {
        templateUrl: 'templates/notes/notes.html',
        controller: 'NotesController'
      }).
    when('/notes/new',
      {
        templateUrl: 'templates/notes/edit.html',
        controller: 'NotesCreateController'
      }).
      when('/user',
      {
        templateUrl: 'templates/user/user.html',
        controller: 'UserController'
      }).
      when('/products',
      {
        templateUrl: '/templates/products/products.html',
        controller: 'ProductsController'
      }).
      when('/index',
      {
        templateUrl: 'templates/index.html',
      }).
      when('/unal',
      {
        templateUrl: 'templates/unal.html',
      }).
      when('/',
      {
        redirectTo:'/user'
      })
      .otherwise({
        redirectTo:'/notes'
      });
  }]);
})();