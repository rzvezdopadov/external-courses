const objectOutputKeyValue = (obj) => {
  const arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i += 1) {
    console.log(`${arr[i][0]}: ${arr[i][1]}`);

    if (i === arr.length - 1) return;
  }
};

module.exports = objectOutputKeyValue;
