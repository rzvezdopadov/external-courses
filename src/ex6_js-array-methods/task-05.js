const OurMap = (arr, fn) => {
  const arrTemp = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrTemp.push(fn.call(this, arr[i], i, arr));
  }

  return arrTemp;
};

module.exports = OurMap;
