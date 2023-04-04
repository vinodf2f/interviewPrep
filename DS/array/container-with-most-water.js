const getMaxVol = (array) => {
  let left = 0;
  let right = array.length - 1;
  let maxVol = -Infinity;

  while (left < right) {
    const leftHeight = array[left];
    const rightHeight = array[right];
    const minHeight = Math.min(leftHeight, rightHeight);
    const vol = minHeight * (right - left);

    maxVol = Math.max(maxVol, vol);
    if (array[left] < array[right]) {
      left++;
    } else right--;
  }
  console.log({ maxVol });
};

getMaxVol([1, 8, 6, 2, 5, 4, 8, 3, 7]);
