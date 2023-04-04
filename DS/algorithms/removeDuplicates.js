const removeDuplicates = (arr) => {
  let l = 0;
  let r = 1;

  while (r < arr.length) {
    if (arr[l] !== arr[r]) {
      arr[++l] = arr[r];
    }
    r++;
  }
  console.log({ arr });
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
