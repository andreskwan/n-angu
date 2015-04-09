(function(){
	angular.module('gemStore')
  //why this module depends on $http
  .controller('ProductsController', ['$http', '$scope',
    //why this function needs the $http service?
    function($http, $scope) {
        // debugger;
        var store = this;
        $http({method:'GET', url: '/productos'})
          .success(function (data){
                    data = data.productos;
                    // debugger;
                    $scope.products  = data;
                    $scope.gemsOrder = 'name';
          })
          .error(
                // called asynchronously if an error occurs
                // or server returns response with an error status.
          );
  }])
  .directive("productGallery", function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/products/product-gallery.html',
      controller: function(){
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
      },
      controllerAs: 'GalleryController'
    };
  })
  .directive("productTabs", function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/products/product-tabs.html',
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
  })
  .directive("productDescription", function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/products/product-description.html'
      // template: '<h4>Description</h4> <blockquote>{{product.description}}</blockquote>'
    };
  })
  .directive("productSpecs", function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/products/product-specs.html'
    };
  })
  .directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "templates/products/product-reviews.html",
      controller: function($http){
                    this.review = {};
                    this.addReview = function(product){
                    // debugger;
                    console.log(product.review);
                    product = {"producto":product};
                    console.log(product);
                    // $http({method:"POST",url:'/productos/', data:product});
                    // product = JSON.stringify(product);
                    $http.post('/productos', product).
                      success(function(data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        // debugger;
                      }).
                      error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        // debugger;
                      });
                      // $http({method:"POST",url:'/productos/', data:product});
                      // product.reviews.push(this.review);
                      // this.review = {};
                    };
                  },
      controllerAs: 'ReviewController'
    };
  });
})();