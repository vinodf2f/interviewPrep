const getLeftMostReapeatingChar = (str) => {
  const arr = Array(128).fill(0);

  [...str].forEach((element, index) => {
    const charCode = str.charCodeAt(index);
    arr[charCode]++;
  });

  let result;
  for (let index = 0; index < str.length; index++) {
    const charCode = str.charCodeAt(index);

    if (arr[charCode] > 1) {
      result = index;
      break;
    }
  }
  console.log(result);
};

getLeftMostReapeatingChar("yeeksforgeeks");
