(function(){
	var app = angular.module('store-products', []);
  
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
      controllerAs: 'gallery'
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
      controllerAs: 'tab'
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "partials/product-reviews.html",
      controller: function(){
                    this.review = {};
                    this.addReview = function(product) {
                      product.reviews.push(this.review);
                      this.review = {};
                    }
                  },
      controllerAs: 'reviewCtrl'
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

})();