angular.module("app",[])
	.controller("contactSlide", ["$scope",function($scope){

	}])
	.directive("contactForm", function(){
		return {
			restrict: "EA",
			templateUrl: "template/contact.html"
		}
	})