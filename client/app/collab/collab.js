angular.module('battlescript.collab', [])
.controller('CollabController', function(Editor) {
  var vm = this; // vm refers to view-model

  vm.setUpCollab = function() {
    /**
     * Sets up the Collaborative Editor
     */
    vm.editor = Editor.makeEditor('#editor--user', false);
  }();
})
