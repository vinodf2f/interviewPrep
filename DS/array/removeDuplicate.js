const removeDuplicate = (array) => {
  const arrayLength = array.length;
  let l = 0;
  let r = 1;
  let count = 0;

  while (r < arrayLength) {
    if (array[l] === array[r] && count === 1) {
      r++;
    } else {
      if (array[l] === array[r]) {
        count++;
      } else {
        count = 0;
      }
      l++;
      array[l] = array[r];
      r++;
    }
  }
  console.log({ array: array.slice(0, l + 1) });
};

removeDuplicate([1, 1, 1, 2, 3, 4, 4, 4, 5]);
