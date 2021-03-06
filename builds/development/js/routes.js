  (function() {
    //this module depends on
    // 'store-products' module
    // 'ngRoute'
  angular.module('gemStore')
  //how to use this with directives?
  .config(['$routeProvider',function($routeProvider) {
    // debugger;
    $routeProvider.
    when('/nw-categories',
      {
        templateUrl: 'templates/user/nw-category-select.html',
        controller: 'NWUserIndexController'
      }).
    when('/nw-user',
      {
        templateUrl: 'templates/user/nw-user.html',
        controller: 'NWUserIndexController'
      }).
    when('/nw-user-create',
      {
        templateUrl: 'templates/user/nw-user-create.html',
        controller: 'NWUserCreateController'
      }).
    when('/notes',
      {
        templateUrl: 'templates/notes/notes.html',
        controller: 'NotesIndexController'
      }).
    when('/notes/new',
      {
        templateUrl: 'templates/notes/edit.html',
        controller: 'NotesCreateController'
      }).
    when('/notes/:id',
      {
        templateUrl: 'templates/notes/show.html',
        controller: 'NotesShowController'
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