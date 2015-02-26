(function(){
	var app = angular.module('storeProducts', []);


  //why this module depends on $http
  app.controller('StoreController', ['$http', '$scope',
    //why this function needs the $http service? 
    function($http, $scope) {
        var store = this;
        $http.get('js/products.json')
            .success(function(data){
                // this callback will be called asynchronously
                // when the response is available    
                $scope.products  = data; 
                $scope.gemsOrder = 'name';
            })
            .error(
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            );
    }]);

  //template for directive 
  // app.directive('Products',function(){
  //   // Runs during compile
  //   return {
  //     // name: '',
  //     // priority: 1,
  //     // terminal: true,
  //     // scope: {}, // {} = isolate, true = child, false/undefined = no change
  //     controller: function($scope, $element, $attrs, $transclude) {},
  //     // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
  //     restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
  //     // template: '',
  //     templateUrl: 'partials/products.html',
  //     // replace: true,
  //     // transclude: true,
  //     // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
  //     // link: function($scope, iElm, iAttrs, controller) {
  //     // }
  //   };
  // });
  
  app.directive("productGallery", function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/product-gallery.html',
      controller: function(){
          this.current = 0;

          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
      },
      controllerAs: 'GalleryController'
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/product-tabs.html',
      controller: function(){
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(setTab) {
            this.tab = setTab;
          };
      },
      controllerAs: 'TabController'
    };
  });

  app.directive("productDescription", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/product-description.html'
      // template: '<h4>Description</h4> <blockquote>{{product.description}}</blockquote>'
    };
  });

  app.directive("productSpecs", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/product-specs.html'
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "partials/product-reviews.html",
      controller: function(){
                    this.review = {};
                    this.addReview = function(product){
                      product.reviews.push(this.review);
                      this.review = {};
                    }
                  },
      controllerAs: 'ReviewController'
    };
  });
})();