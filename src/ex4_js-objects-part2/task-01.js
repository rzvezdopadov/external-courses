const searchPropsInProtoObj = (keyObj, obj) => Object.getPrototypeOf(obj)[keyObj];

module.exports = searchPropsInProtoObj;
