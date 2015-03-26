(function() {
    //'gemStore' module depends on 'store-products' modules
  angular.module('gemStore',['ngRoute','productsModule','productModule'])

  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('%%');
    $interpolateProvider.endSymbol('%%');
  })
  .directive("pageNavigation", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
    };
  })
  .directive("pageFooter", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/footer.html'
    };
  });
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
