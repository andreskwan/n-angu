(function(){
	angular.module('gemStore')
	.factory("NWUserFactory",['$resource',
		function ($resource){
			return $resource("/usuarios/:id/");
		}]);
})();