(function(){
	angular.module('gemStore')
	.directive('nwCardDirective', [function(){
		debugger;
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/nw-card.html',
			scope: {
				description: "=",
				header     : "=",
				icon       : "=",
				id         : "=",
				image      : "=",
				tweeted    : '='
			},
			link: function($scope, element) {
				if(scope.tweeted){
					element.addClass('tweeted');
				}
			}
		};
	}]);
})();