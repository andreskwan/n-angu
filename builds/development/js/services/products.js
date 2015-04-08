(function(){
	angular.module('gemStore')
	.factory("ProductFactory",['$resource',
		function($resource){
			return $resource("/productos/:id/");
		}]);
})();