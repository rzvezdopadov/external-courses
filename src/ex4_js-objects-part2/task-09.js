const integratesSubstring = (str, subStr, pos) => {
  const tempStr = str.split(' ');

  tempStr.splice(pos + 1, 0, subStr);

  return tempStr.join(' ');
};

module.exports = integratesSubstring;
