"use strict";

var _HelloWorld = _interopRequireDefault(require("./HelloWorld"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HelloWorld', function () {
  var helloWorld;
  describe('#show', function () {
    beforeEach(function () {
      helloWorld = new _HelloWorld.default();
    });
    it('should show a hello world message', function () {
      var message = helloWorld.show('World');
      expect(message).toBe('Hello World');
    });
  });
});