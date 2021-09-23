const SetPropertyNotHaveObject = (str, obj) => {
  const objTemp = JSON.parse(JSON.stringify(obj));
  if (!(objTemp.hasOwnProperty(str))) {
    objTemp[str] = 'new';
  }
  return objTemp;
};

module.exports = SetPropertyNotHaveObject;
