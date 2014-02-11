## Instance Of
===================================

Usage:

```javascript
var InstanceOf = require('instance-of');

// example objects.
var Stream = require('stream'),
  Util = require('util'),
  Actor = require('chix-flow').Actor,
  stream = new Stream();

function report(obj, type) {
  if(InstanceOf(obj, type)) {
    console.log('YES! is a', type);
  } else {
    console.log('Nope! not a', type);
  }
}

report(stream, 'Stream');
report(Util, 'Object');
report(true, 'boolean');
report(false, 'boolean');
report(100, 'number');
report("string", 'number');
report(new Actor(), 'Actor');
report(new Actor(), 'Handler');

YES! is a Stream
YES! is a Object
YES! is a boolean
YES! is a boolean
YES! is a number
Nope! not a number
YES! is a Actor
YES! is a Handler
YES! is a string

```
