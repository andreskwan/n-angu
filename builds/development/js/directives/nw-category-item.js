/**
* gemStore Module
*
* Description
*/
angular.module('gemStore')
.directive('nwCategoryItem', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			category: "=",
			icon : "=",
			name : "="

		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: '^nwCategorySelect', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'template/directive/nw-category-item.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, nwCategorySelectCtrl) {
			scope.makeActive = function(){
				nwCategorySelectCtrl.setActiveCategory(scope.category);
			}
		}
	};
}]);