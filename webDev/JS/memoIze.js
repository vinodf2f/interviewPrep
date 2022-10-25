const getSum = (count) => {
  let sum = 0;
  for (let index = 0; index < count; index++) {
    sum = sum + count;
  }
  console.log("executing", sum);
  return sum;
};

const memo = (func, context) => {
  const resChache = {};

  return function (...args) {
    const argsChache = JSON.stringify(args);
    if (resChache[argsChache]) {
      return resChache[argsChache];
    } else {
      resChache[argsChache] = func.call(context || this, ...args);
    }

    return resChache[argsChache];
  };
};

// get Sum with non memoized function

console.time("first call");
console.log(getSum(9999999));
console.timeEnd("first call");

console.time("second call");
console.log(getSum(9999999));
console.timeEnd("second call");

// get Sum with  memoized function
const memoizedGetSum = memo(getSum);

console.time("first call memo");
console.log(memoizedGetSum(9999999));
console.timeEnd("first call memo");

console.time("second call memo");
console.log(memoizedGetSum(9999999));
console.timeEnd("second call memo");
