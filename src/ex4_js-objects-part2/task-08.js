const setAllToLowerCamelCase = (str) => str.toLowerCase()
  .replace(/(\s)([a-z])/g, (c) => c.toUpperCase())
  .replace(/\s+/g, '');

module.exports = setAllToLowerCamelCase;
