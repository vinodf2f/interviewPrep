const flatten = (arr = []) => {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = [...acc, ...flatten(item)];
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
};

const numArr = [1, [2, [3], 4, [5, 6, [7]]]];

console.log(flatten(numArr));
