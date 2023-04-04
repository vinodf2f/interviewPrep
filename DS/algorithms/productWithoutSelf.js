const getProduct = (arr) => {
  let preFix = 1;
  let postFix = 1;
  const output = [];

  arr.forEach((element, index) => {
    output[index] = preFix;
    preFix = preFix * element;
  });
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    output[index] = postFix;
    postFix = postFix * element;
  }
  console.log({ output });
};

getProduct([1, 2, 3, 4]);
