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

      vm.collabSocket.on('editorState', function(changeObj) {
        vm.editor.replaceRange(changeObj.text, changeObj.from, changeObj.to);
      });

      vm.editor.on('beforeChange', function(codeMirror, changeObj) {
        // changeObj.cancel();
        console.log(changeObj);
      });

      vm.editor.on('change', function(codeMirror, changeObj) {
        // vm.editor.getValue()
        vm.sendEditorState(changeObj);
      });
    }
  }();

  vm.sendEditorState = function(editorState) {
    vm.collabSocket.emit('editorState', editorState);
  };

  vm.sendKeyStroke = function(keystroke) {
    vm.collabSocket.emit('keystroke', keystroke);
  };

})
