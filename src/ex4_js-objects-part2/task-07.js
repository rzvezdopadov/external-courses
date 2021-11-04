const setDotsOverSymbol = (str, num) => (str.length > num ? `${str.substr(0, num - 1)}…` : str);

module.exports = setDotsOverSymbol;
