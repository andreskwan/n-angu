(function(){
	angular.module('gemStore')
	.provider("Gravatar",[
		function GravatarProvider(){
			//default size for my image
			var avatarSize = 80;
			var avatarUrl = "http://en.gravatar.com/avatar/";
			this.setSize = function(size){
				avatarSize = size;
			};
			this.$get = function(){
						return function(email){
									// debugger;
								return avatarUrl + CriptoJS.md5(email) + "?size=" + avatarSize.toString();
							   };
						};
		}]);
})();