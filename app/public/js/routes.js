(function() {
    //this module depends on
    // 'store-products' module 
    // 'ngRoute'
  angular.module('gemStore')
  //how to use this with directives?
  .config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/products',
      {
        templateUrl: 'partials/products.html',
        controller: 'StoreController'
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
        redirectTo:'/unal'
      });
  }]);
})();

  // //template for directive 
  // app.directive('Products',function(){
  //   // Runs during compile
  //   return {
  //     // name: '',
  //     // priority: 1,
  //     // terminal: true,
  //     // scope: {}, // {} = isolate, true = child, false/undefined = no change
  //     // controller: function($scope, $element, $attrs, $transclude) {},
  //     // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
  //     restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
  //     // template: '',
  //     templateUrl: 'partials/products.html',
  //     controller: 'StoreController'
  //     // replace: true,
  //     // transclude: true,
  //     // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
  //     // link: function($scope, iElm, iAttrs, controller) {
  //     // }
  //   };
  // });
