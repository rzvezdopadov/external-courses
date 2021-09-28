const ourFilter = (arr, fn) => {
  const arrTemp = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (fn.call(this, arr[i], i, arr)) {
      arrTemp.push(arr[i]);
    }
  }

  return arrTemp;
};

module.exports = ourFilter;
