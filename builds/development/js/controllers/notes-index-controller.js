(function(){
	angular.module('gemStore')
	.controller('NotesIndexController', ['$http', '$scope', 'Tweetable',
    function($http,$scope,Tweetable){
    // debugger;
		 $http({method:'GET', url:'/notas'})
        .success(function(data){
          $scope.notes = data;
      	})
      	.error(function(error){
      		console.log("$http - notes-controller REST: ",error);
      	});
     $scope.tweetThatNote = function (noteToTweet){
                                Tweetable(noteToTweet)
                                .success(function(status){
                                  console.log(status);
                                });
  };
	}]);
})();