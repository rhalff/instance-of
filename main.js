module.exports = function InstanceOf(obj, type) {
  if(obj === null) return false;
  var t = typeof obj;
  if(t === 'object') {
    if(type.toLowerCase() === t) return true; // Object === object
    if(obj.constructor.name === type) return true;
    return InstanceOf(Object.getPrototypeOf(obj), type);
  } else {
    if(t === 'Array' && type.toLowerCase() === t) return true; // Array === array
    return t === type;
  }
};
