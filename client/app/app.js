angular.module('battlescript', [
  'battlescript.services',
  'battlescript.home',
  'battlescript.challenges',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .when('/challenges', {
      templateUrl: 'app/challenges/challenges.html',
      controller: 'ChallengesController'
    })
    .otherwise({
      redirectTo: '/'
    });
});