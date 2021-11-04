const setAllFirstSymbolUpperCase = (str) => str.replace(/(\s|^)([a-z])/g, (c) => c.toUpperCase());

module.exports = setAllFirstSymbolUpperCase;
