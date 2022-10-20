const binarySearch = (arr, value) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor(leftIndex + rightIndex / 2) - 1;
    const middleValue = arr[middleIndex];

    console.log({
      leftIndex,
      middleIndex,
      rightIndex,
      middleValue,
      value,
    });

    if (value === middleValue) {
      return value;
    } else if (middleValue < value) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
    // return;
  }
  return -1;
};

const val = binarySearch([1, 2, 3, 4, 5, 6], 10);
console.log(val, "<>");
