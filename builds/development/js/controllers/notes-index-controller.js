(function(){
	angular.module('gemStore')
	.controller('NotesIndexController', ['$http', '$scope', 'TweetableFactory',
    function($http,$scope,TweetableFactory){
    // debugger;
		 $http({method:'GET', url:'/notas'})
        .success(function(data){
          $scope.notes = data;
      	})
      	.error(function(error){
      		console.log("$http - notes-controller REST: ",error);
      	});
     $scope.tweetThatNote = function (noteToTweet){
                                TweetableFactory(noteToTweet)
                                .success(function(status){
                                  console.log(status);
                                });
  };
	}]);
})();