(function(){
	angular.module('gemStore')
	.controller('NotesCreateController', ['NoteFactory','$scope',function(NoteFactory,$scope) {
		  $scope.saveNote = function(note){
		    // $http({method: 'POST', url: '/notas', data: note});
		    // I pass the note object and the returned note from server
		    console.log(note);
		    var note = {nota:note};
		    // debugger;
		    NoteFactory.save(note, function(note){
		        	console.log(note);
		        	// debugger;
		        },function (error){
		        	console.log("Error.status",error.status);
		        	console.log("Error",error);
		        	// debugger;
		        });
		  };
	}]);
})();