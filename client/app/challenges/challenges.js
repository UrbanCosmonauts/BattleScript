angular.module('battlescript.challenges', [])
.controller('ChallengesController', function ($scope, Challenges) {

  $scope.data;

  $scope.getChallenge = function() {
    Challenges.getChallenge()
      .then(function(data) {
        $scope.data = data;
      })
      .catch(function(err) {
        console.log(err);
      });
  };

});