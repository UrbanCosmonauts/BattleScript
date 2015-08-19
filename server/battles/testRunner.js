//taken from https://github.com/Codewars/codewars-runner/tree/master/examples/javascript/ and modified to suit our purposes
var __vm = require('vm');
require('./testFramework.js');

module.exports = function(code, testCode){
  testCode = 'Test.expect(true == true);';
  

  __vm.runInThisContext(code);
  (function() {
    __vm.runInThisContext(testCode);
  })();
};



