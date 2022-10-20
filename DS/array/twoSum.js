// return array of index of value with target Sum

const getTwoSumIndex = (givenArray, target) => {
  const pairMap = {};
  const resultArray = [];
  givenArray.forEach((element, index) => {
    if (pairMap[target - element] !== undefined) {
      resultArray.push([index, pairMap[target - element]]);
    } else {
      pairMap[element] = index;
    }
  });

  console.log({ resultArray, pairMap });
  return resultArray;
};

getTwoSumIndex([0, 1, 2, 3, 4, 5, 3, 6], 4);
