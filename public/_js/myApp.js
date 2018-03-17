



var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'angular-typed', 'smoothScroll']);

myApp.config(function($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: '_html/home_page.html',
      controller: 'mainController'
    })

    .when('/about', {
      templateUrl: '_html/about.html',
      controller: 'aboutController'
    })

    .when('/projects', {
      templateUrl: '_html/projects.html',
      controller: 'projectsController'
    })

    .when('/showcase_GW', {
      templateUrl: '_html/gw_showcase.html',
      controller: 'gwShowcaseController'
    })

    .when('/showcase_Ascend', {
      templateUrl: '_html/ascend_showcase.html',
      controller: 'ascendShowcaseController'
    })

    .when('/contact', {
      templateUrl: '_html/contact_firebase.html',
      controller: 'ContactFormController'
    })




});

/* myApp.controller('contact_controller', function ($scope, $http) {
  $scope.check_credentials = function () {
    var captcha = $scope.cone + $scope.ctwo;
    var type_captcha = $scope.type_captcha;
    if (captcha == type_captcha) {
      $scope.toggle = false;
      $scope.errtoggle = false;
      $scope.loader = "true";
      var request = $http({
        method: "post",
        url: "http://kevinyum.com/_js/contact.php",
        data: {
          email: $scope.email,
          phone: $scope.phone,
          subject: $scope.subject.type,
          message: $scope.message,
          name: $scope.name,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      request.success(function (data) {
        if (data == 'success') {
          $scope.loader = false;
          $scope.toggle = true;
        } else {
          $scope.errtoggle = true;
        }
      });
    } else {
      $scope.toggle = false;
      $scope.errtoggle = true;
    }
  }
  // Function for generating random numbers
  $scope.getRandomSpan = function () {
    return Math.floor((Math.random() * 6) + 1);
  }
  // Validating function for captcha
  $scope.result = function () {
    var random = $scope.cone + $scope.ctwo;
    var enteredcaptcha = $scope.type_captcha;
    var CaptchaClass = angular.element(document.querySelector('#captcha'));
    if (enteredcaptcha) {
      if (random != enteredcaptcha) {
        CaptchaClass.addClass("invalid-captcha ng-invalid").removeClass("ng-valid");
      } else {
        CaptchaClass.removeClass("invalid-captcha ng-invalid").addClass("ng-valid");
      }
    } else {
      CaptchaClass.removeClass("invalid-captcha");
    }
  }
  // For Select Options
  $scope.typeOptions = [
    {
      name: 'Sales',
      value: 'sales'
    },
    {
      name: 'Feature',
      value: 'feature'
    },
    {
      name: 'Bug',
      value: 'bug'
    }
    ];
  $scope.subject = {
    type: $scope.typeOptions[0].value
  };
}); */


myApp.controller('mainController', function($scope) {

});

myApp.controller('aboutController', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }
});

myApp.controller('projectsController', function($scope) {

});

myApp.controller('gwShowcaseController', function($scope) {

});

myApp.controller('ascendShowcaseController', function($scope) {

});

myApp.controller('ContactFormController', ['$scope', '$http', '$mdToast', '$animate', function($scope, $http, $mdToast, $animate) {
  //Expose view variables

  $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };

  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function (pos) {
        return $scope.toastPosition[pos];
      })
      .join(' ');
  };

  this.sendMail = function() {

    data = ({
      contactName : this.contactName,
      contactEmail: this.contactEmail,
      contactMsg : this.contactMsg
    });

    // Simple POST request example (passing data) :
    $http.post('/contact-form', data).
      success(function(data, status, headers, config) {
        $mdToast.show(
          $mdToast.simple()
            .content('Thanks for your message ' + data.contactName + '!')
            .position($scope.getToastPosition())
            .hideDelay(5000)
        );
      }).
      error(function(data, status, headers, config) {

      });


  };
}]);


$rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {

  window.scrollTo(0, 0);

});
