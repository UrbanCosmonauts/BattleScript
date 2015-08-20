angular.module('battlescript.directives.battlePrompt',[
  'battlescript.services'
])
.directive('battlePrompt', function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      battleDescriptions: '=battleDescription'
    },
    template: '<div><h3 class="battle-prompt__title">Prompt:</h3> \
    <div class="battle-prompt__description" ng-show="!!battleDescriptions" ng-bind-html="battleDescriptions"></div></div>',
    // templateUrl requires a build tool for concatenation
  }
})
// can't add controller without factoring logic in battle.js
// .controller('battlePromptController', function(Battle) {
// })
