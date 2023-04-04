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

// const res = productExceptSelf([0, 2, 3, 4]);

// console.log({ res });

const productExceptSelfNew = (numbers) => {
  const result = Array(numbers.length);
  let prefix = 1;

  for (let index = 0; index < numbers.length; index++) {
    result[index] = prefix;
    prefix = prefix * numbers[index];
  }
  console.log({ result });
  let postfix = 1;
  for (let index = numbers.length - 1; index >= 0; index--) {
    result[index] = result[index] * postfix;
    postfix = postfix * numbers[index];
  }
  console.log({ result });
};

const result = productExceptSelfNew([1, 2, 0, 4]);
