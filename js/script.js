angular.module("app",['ngAnimate'])
	.directive("contactForm", function(){
		return {
			restrict: "EA",
			templateUrl: "template/contact.html",
			controller: function($scope){
				$scope.show = false;
				$scope.form = {} ;

				$scope.openForm = function(){
					$scope.form = {};
					$scope.show = true;
				}
				$scope.closeForm = function(){
					$scope.show = false;
				}
				$scope.submitForm = function(){
					var text = "Firstname is " + $scope.form.firstName + "\n" + "Lastname is " + $scope.form.lastName + "\n" + "Message is " + $scope.form.message;
					console.log(text);
				}
			}
		}
	})