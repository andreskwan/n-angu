(function(){
	angular.module('gemStore')
	.factory('TweetableFactory', ['$http', function($http){
		return function name(potentialTweet){
			return $http({ 
							method : "POST", 
							url  : "http://gentle-spire-1153.herokuapp.com/tweet", 
							data : {description:potentialTweet}
						});
		};
	}]);
})();