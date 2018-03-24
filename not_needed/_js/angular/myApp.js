var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'angular-typed', 'smoothScroll']);

myApp.config(function ($routeProvider) {

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
      templateUrl: '_html/contact.html',
      controller: 'contactController'
    })

    .when('/contact_success', {
      templateUrl: '_html/contact_success.html',
      controller: 'contactController'
    });
  
  
  

});

myApp.controller('mainController', function ($scope) {

});

myApp.controller('aboutController', function ($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});

myApp.controller('projectsController', function ($scope) {

});

myApp.controller('gwShowcaseController', function ($scope) {

});

myApp.controller('ascendShowcaseController', function ($scope) {

});

myApp.controller('contactController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
  
  $scope.sendMessage = function () {
    $location.path('/contact_success');
  }
  
  $scope.url = 'contact_form.php';
  $scope.formsubmit = function (isValid) {

    if (isValid) {

      $http.post($scope.url, {
        "name": $scope.name,
        "email": $scope.email,
        "message": $scope.message
      }).
      success(function (data, status) {
        $scope.status = status;
        $scope.data = data;
        $scope.result = data; // Show result from server in our <pre></pre> element
      })
    } else {
      alert('Form is not valid');
    }

  }
}]);

$rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {

    window.scrollTo(0, 0);

});
