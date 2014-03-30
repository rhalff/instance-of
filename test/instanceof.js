var instanceOf = require('../');
var stream     = require('stream');
var test       = require('tape');

test('type checking', function (t) {

  t.plan(10);

  t.ok(instanceOf(true, 'boolean'), 'true is a boolean');
  t.ok(instanceOf(false, 'boolean'), 'true is a boolean');
  t.ok(instanceOf([], 'array'), '[] is an array');
  t.ok(instanceOf([], 'Array'), '[] is an Array');
  t.ok(instanceOf('a string', 'string'), 'String is a string');
  t.ok(instanceOf(99, 'number'), 'Number is a number');
  t.ok(instanceOf({}, 'object'), 'Object is an object');
  t.ok(instanceOf({}, 'Object'), 'Object is an Object');
  t.ok(instanceOf(instanceOf, 'function'), 'instanceOf is a function');
  t.ok(instanceOf(new stream(), 'Stream'), 'stream is a Stream');

});
