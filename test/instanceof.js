var instanceOf = require('../');
var test       = require('tape');

test('type checking', function (t) {

  t.plan(12);

  t.ok(instanceOf(true, 'boolean'), 'true is a boolean');
  t.ok(instanceOf(false, 'boolean'), 'true is a boolean');
  t.ok(instanceOf([], 'array'), '[] is an array');
  t.ok(instanceOf([], 'Array'), '[] is an Array');
  t.ok(instanceOf('a string', 'string'), 'String is a string');
  t.ok(instanceOf(99, 'number'), 'Number is a number');
  t.ok(instanceOf({}, 'object'), 'Object is an object');
  t.ok(instanceOf({}, 'Object'), 'Object is an Object');
  t.ok(instanceOf(instanceOf, 'function'), 'instanceOf is a function');
  t.ok(instanceOf(new test.Test(), 'Test'), 'Test is a Test');
  t.ok(instanceOf(new test.Test(), 'EventEmitter'), 'Test is an EventEmitter');
  t.ok(instanceOf(new test.Test(), 'Object'), 'Test is an Object');

});
