const getSquare = (arr) => {
  let r = arr.length - 1;

  while (r > 0) {
    debugger;
    const leftQuare = arr[l] * arr[l];
    const rightQuare = arr[r] * arr[r];
    if (rightQuare > leftQuare) {
      arr[r] = rightQuare;
      r--;
    } else {
      let temp = arr[r];
      arr[r] = leftQuare;
      arr[l] = temp;
      r--;
    }
  }
  console.log({ arr });
};

getSquare([-4, -1, 0, 3, 10]);
