angular.module('battlescript.services', [])

// Challenges factory
.factory('Challenges', function($http) {
  
  var getChallenge = function() {
    return $http({
      method: 'GET',
      url: '/api/challenges/getchallenge',
    }).then(function(res) {
      return res.data;
    });
  };

  return {
    getChallenge: getChallenge
  }
});