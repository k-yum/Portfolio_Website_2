// JavaScript Document
	// Starting Page App and Controller
	var app = angular.module('contact_app', []);
	app.controller('contact_controller', function ($scope, $http) {
	$scope.check_credentials = function () {
		var captcha =  $scope.cone + $scope.ctwo;
		var type_captcha =  $scope.type_captcha;
		if(captcha == type_captcha)	{
			$scope.toggle = false;
			$scope.errtoggle = false;
			$scope.loader="true";
			var request = $http({
				method: "post",
				url: "http://example.com/ng-contact/contact.php",
				data: {
					email: $scope.email,
					phone: $scope.phone,
					subject: $scope.subject.type,
					message: $scope.message,
					name: $scope.name,
				},
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			request.success(function (data) {
				if(data=='success'){
					$scope.loader=false;
					$scope.toggle = true;
				}else{
					$scope.errtoggle = true;
				}
			});
		}else{
			$scope.toggle = false;
			$scope.errtoggle = true;
		}
	}
	// Function for generating random numbers
	$scope.getRandomSpan = function(){
  		return Math.floor((Math.random()*6)+1);
	}
	// Validating function for captcha
	$scope.result = function() {
		var random = $scope.cone + $scope.ctwo;
		var enteredcaptcha = $scope.type_captcha;
		var CaptchaClass = angular.element(document.querySelector('#captcha'));
		if(enteredcaptcha){
			if (random != enteredcaptcha) {
		   		CaptchaClass.addClass("invalid-captcha ng-invalid").removeClass("ng-valid");
			}else{
				CaptchaClass.removeClass("invalid-captcha ng-invalid").addClass("ng-valid");
			}
		}else{
			CaptchaClass.removeClass("invalid-captcha");
		}
  	}
	// For Select Options
	$scope.typeOptions = [
		{ name: 'Sales', value: 'sales' },
    	{ name: 'Feature', value: 'feature' }, 
    	{ name: 'Bug', value: 'bug' }
    ];
    $scope.subject = {type : $scope.typeOptions[0].value};
});
