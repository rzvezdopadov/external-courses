const setPropertyNotHaveObject = (str, obj) => {
  const objTemp = { ...obj };

  if (!(objTemp.hasOwnProperty(str))) {
    objTemp[str] = 'new';
  }

  return objTemp;
};

module.exports = setPropertyNotHaveObject;
