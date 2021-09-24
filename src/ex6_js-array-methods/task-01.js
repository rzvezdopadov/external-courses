const OurSplice = (arr, begin, end) => {
  let beginTemp;
  let endTemp;

  if (isNaN(begin) || typeof (begin) !== 'number') {
    beginTemp = 0;
  } else if (begin < 0) {
    beginTemp = begin + arr.length;
    if (beginTemp < 0) { beginTemp = 0; }
  } else {
    beginTemp = begin;
  }

  if (isNaN(end) || typeof (end) !== 'number') {
    endTemp = arr.length;
  } else if (end < 0) {
    endTemp = end + arr.length;
    if (endTemp < 0) { endTemp = arr.length; }
  } else if (end > arr.length) {
    endTemp = arr.length;
  } else {
    endTemp = end;
  }

  const arrTemp = [];

  for (let i = beginTemp; i < endTemp; i += 1) {
    arrTemp.push(arr[i]);
  }

  return arrTemp;
};

module.exports = OurSplice;
