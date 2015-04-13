(function(){
	angular.module('gemStore')
	.factory("Note",['$resource',
		function NoteFactory($resource){
			return $resource("/notas/:id/");
		}]);
})();