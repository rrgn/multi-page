var app = angular.module('multi-page', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/page1', {
      templateUrl: 'page1.html'
    })

    .when('/page2', {
      templateUrl: 'page2.html'
    })

    .when('/page3', {
      templateUrl: 'page3.html'
    })

    .otherwise({
      redirectTo: '/page1'
    });
});
