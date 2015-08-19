angular.module('battlescript.collab', [])
.controller('CollabController', function($scope, Auth, Socket, Users, Editor) {
  var vm = this; // vm refers to view-model

  vm.battleRoomId = 1;

  vm.setUpCollab = function() {
    vm.editor = Editor.makeEditor('#editor--user', false);
    if (Auth.isAuth()) {

      vm.collabSocket = Socket.createSocket('collab', [
        'username=' + Users.getAuthUser(),
        'handler=collab',
        'roomhash=' + vm.battleRoomId
      ]);

      vm.collabSocket.on('listOfUsers', function(listOfUsers) {
        vm.listOfUsers = listOfUsers;
        $scope.$apply();
      });
    }
  }();

})
