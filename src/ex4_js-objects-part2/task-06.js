const AllFirstSymbolUpperCase = (str) => str.replace(/(\s|^)([a-z])/g, (c) => c.toUpperCase());

module.exports = AllFirstSymbolUpperCase;
