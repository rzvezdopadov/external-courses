const howManyEachLetter = (str) => {
  const obj = {};

  str.split('')
    .forEach((value) => {
      if (obj.hasOwnProperty(value)) { obj[value] += 1; } else { obj[value] = 1; }
    });

  const arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i += 1) {
    console.log(`${arr[i][0]}: ${arr[i][1]}`);

    if (i === arr.length - 1) return;
  }
};

module.exports = howManyEachLetter;
