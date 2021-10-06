/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const createNewObjectFull = (obj) => {
  if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj) return obj;

  let newObj = obj.constructor();
  if (obj instanceof Date) newObj = new obj.constructor();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj.isActiveClone = null;
      newObj[key] = createNewObjectFull(obj[key]);
      delete obj.isActiveClone;
    }
  }
  return newObj;
};

module.exports = createNewObjectFull;
