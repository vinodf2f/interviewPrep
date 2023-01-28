var productExceptSelf = function (nums) {
  let indexOfZero = null;
  let zeroCount = 0;
  const allMultiple = nums.reduce((acc, item, index) => {
    if (item == 0) {
      indexOfZero = index;
      zeroCount++;
      return acc;
    }
    acc = acc * item;
    return acc;
  }, 1);

  if (zeroCount >= 2) {
    return Array(nums.length).fill(0);
  }

  if (indexOfZero !== null) {
    return nums.map((item, index) => (index === indexOfZero ? allMultiple : 0));
  } else {
    return nums.map((item, index) => allMultiple / item);
  }
};

const res = productExceptSelf([0, 2, 3, 4]);
console.log({ res });
