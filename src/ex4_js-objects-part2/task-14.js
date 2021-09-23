const RandomRange = (min, max) => Math.floor(min + Math.random() * (1 + max - min));

module.exports = RandomRange;
