(function(){
	angular.module('gemStore')
	.provider('Tweetable', [function TweetableProvider(){
		var characterLength = 100;
		this.setLength = function (length){
							characterLength = length;
						};
		this.$get = function($http){
			return function name(potentialTweet){
				return $http({ 
								method : "POST", 
								url  : "http://gentle-spire-1153.herokuapp.com/tweet", 
								data : {description:potentialTweet},
								maxLength: characterLength
							});
			};
		};
	}]);
})();