/**
*  Module
*
* Description
*/
angular.module('gemStore')
.directive('nwCategorySelect', 
	[function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope) {
			this.setActiveCategory = function(category){
				$scope.activeCategory = category.name;
			};
			this.getActiveCategory = function(){
				return $scope.activeCategory;
			};
			return this;
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'templates/directives/nw-category-select.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs) {
			scope.Categories = Categories.query();
		}
	};
}]);