const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let midIdx = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIdx));
  const right = mergeSort(arr.slice(midIdx));
  console.log({ left, right, midIdx });

  return mergeArr(left, right);
};

const mergeArr = (left, right) => {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

console.log("sorted", mergeSort([3, 1, 5, 2, 6]));
