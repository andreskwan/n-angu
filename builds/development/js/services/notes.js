(function(){
	angular.module('gemStore')
	.factory("NoteFactory",['$resource',
		function($resource){
			return $resource("/notas/:id/");
		}]);
})();