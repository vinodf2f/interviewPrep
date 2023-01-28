const getMaxProfit = (values = []) => {
  let buy = 0;
  let sell = 0;
  const pairs = [];

  values.forEach((item, index) => {
    if (item < values[buy]) {
      if (sell > buy) {
        pairs.push(`(${buy}, ${sell})`);
        buy = index;
        sell = index;
      } else {
        buy = index;
        sell = index;
      }
    }

    if (item > values[sell]) {
      sell = index;
    }
  });
  pairs.push(`(${buy}, ${sell})`);
  console.log(pairs);
};

getMaxProfit([23, 13, 25, 29, 33, 19, 34, 45, 65, 67]);
