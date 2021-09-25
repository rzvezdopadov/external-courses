const ourReduce = (arr, fn, initValue) => {
  let previousValue = initValue;
  let startPos = 0;

  if (initValue === undefined) {
    previousValue = arr[0];
    startPos = 1;
  }

  for (let i = startPos; i < arr.length; i += 1) {
    previousValue = fn.call(this, previousValue, arr[i], i, arr);
  }

  return previousValue;
};

module.exports = ourReduce;
