const add = (a) => {
  return (...args) => {
    if (args.length) {
      return add(a + args.reduce((acc, b) => acc + b, 0));
    }
    return a;
  };
};

// console.log(add(2)(3)(4, 3)(), "add");

const curry = (fun) => {
  const helper = function (...args) {
    if (args.length >= fun.length) {
      return fun(...args);
    } else {
      return (...args2) => helper(...args, ...args2);
    }
  };
  return helper;
};
const sum = (a, b, c) => {
  return a + b + c;
};

const curriedSum = curry(sum);

console.log(curriedSum(2)(3)(4), "add");
