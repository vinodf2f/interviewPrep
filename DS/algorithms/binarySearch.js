const isElementExist = (arr, element) => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const midElement = arr[mid];

    if (midElement == element) {
      return midElement;
    } else if (element < midElement) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

console.log(isElementExist([1, 3, 5, 6, 8, 11], 8));
