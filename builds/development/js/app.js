(function() {
    //'gemStore' module depends on 'store-products' modules
  angular.module('gemStore',['ngRoute','ngResource'])
  .constant("Constantes",{"url":"http://www.epsilondx.com/django/index.fcgi"})
  .config(function($interpolateProvider,GravatarProvider, TweetableProvider) {
    $interpolateProvider.startSymbol('%%');
    $interpolateProvider.endSymbol('%%');
    GravatarProvider.setSize(100);
    TweetableProvider.setLength(40);
  })
  .directive("pageNavigation", function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/navbar.html'
    };
  })
  .directive("pageFooter", function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/footer.html'
    };
  });
})();