(function(){
	angular.module('gemStore')
	.factory("GravatarFactory",[
		function(){
			//default size for my image
			var avatarSize = 80;
			//gravatar addres
			var avatarUrl = "http://en.gravatar.com/avatar/";
			return {
				generate : function(email){
					debugger;
					return avatarUrl + CriptoJS.md5(email) + "?size=" + avatarSize.toString();
				}
			};
		}]);
})();