const getRandomRange = (min, max) => Math.floor(min + Math.random() * (1 + max - min));

module.exports = getRandomRange;
