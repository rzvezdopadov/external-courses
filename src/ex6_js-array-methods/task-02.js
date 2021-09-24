const OurSome = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (fn.call(this, arr[i], i, arr)) return true;
  }

  return false;
};

module.exports = OurSome;
