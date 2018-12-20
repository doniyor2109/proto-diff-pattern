function createObject(obj) {
  if (typeof obj === "object") {
    return Object.create(obj);
  }
  return obj;
}

function setProtoProperty(obj, key, value) {
  obj.__proto__[key] = value;
}

function getProto(obj) {
  return obj.__proto__;
}

function getPropertyOfProto(obj, key) {
  return getProto(obj)[key];
}

function isObject(input) {
  return typeof input === "object";
}
function replaceObjectWithProto(parent, input) {
  if (isObject(input)) {
    for (let key in input) {
      setProtoProperty(
        input,
        key,
        createObject(getPropertyOfProto(input, key))
      );
      replaceObjectWithProto(input, getPropertyOfProto(input, key));
    }
  }
}

module.exports.createFromNested = function createFromNested(obj) {
  const result = createObject(obj);

  replaceObjectWithProto(result, result);

  return result;
}
