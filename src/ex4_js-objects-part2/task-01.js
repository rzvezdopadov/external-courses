const SerchPropsInProtoObj = (keyObj, obj) => Object.getPrototypeOf(obj)[keyObj];

module.exports = SerchPropsInProtoObj;
