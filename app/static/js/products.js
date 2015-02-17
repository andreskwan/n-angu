(function(){
	var app = angular.module('store-products', []);
  //template for directive 
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
      controllerAs: 'galleryCtrl'
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
      controllerAs: 'tabCtrl'
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
      controllerAs: 'reviewCtrl'
    };
  });
})();