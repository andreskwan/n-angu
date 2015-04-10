(function(){
	angular.module('gemStore')
	.controller('NotesCreateController', [function() {
		  this.saveNote = function(note){
		    $http({method: 'POST', url: '/notas', data: note});
		  };
	}]);
})();