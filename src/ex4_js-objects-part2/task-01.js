const serchPropsInProtoObj = (keyObj, obj) => Object.getPrototypeOf(obj)[keyObj];

module.exports = serchPropsInProtoObj;
