const sortFlag = (array) => {
  let l = 0;
  let r = array.length - 1;
  let i = 0;

  while (l <= r) {
    if (array[i] === 0) {
      let temp = array[l];
      array[l] = array[i];
      array[i] = temp;
      l++;
      i++;
    } else if (array[i] === 2) {
      let temp = array[r];
      array[r] = array[i];
      array[i] = temp;
      r--;
    } else {
      i++;
    }
  }
  console.log({ array });
};

sortFlag([2, 1, 2, 0, 1, 0, 2]);
