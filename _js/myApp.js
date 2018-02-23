var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'angular-typed']);

myApp.config(function ($routeProvider){
  
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
  });
  
});

myApp.controller('mainController', function($scope){

});

myApp.controller('aboutController', function($scope){

});

myApp.controller('projectsController', function($scope){

});

myApp.controller('gwShowcaseController', function($scope){

});

myApp.controller('ascendShowcaseController', function($scope){

});

myApp.controller('contactController', function($scope){

});

