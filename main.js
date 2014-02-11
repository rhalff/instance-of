module.exports = function InstanceOf(obj, type) {
  if(obj === null) return false;
  if(type === 'array') type = 'Array';
  var t = typeof obj;
  if(t === 'object') {
    if(type.toLowerCase() === t) return true; // Object === object
    if(obj.constructor.name === type) return true;
    return InstanceOf(Object.getPrototypeOf(obj), type);
  } else {
    return t === type;
  }
};
