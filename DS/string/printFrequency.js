const getFrequencyInSortedWay = (str = "") => {
  const charArray = Array(26).fill(0);
  const charCodeOfA = "a".charCodeAt(0);

  for (const key in str) {
    charArray[str.charCodeAt(key) - charCodeOfA]++;
  }

  //   GetFrequency
  charArray.forEach((element, index) => {
    if (element !== 0) {
      console.log(String.fromCharCode(index + charCodeOfA), element);
    }
  });

  //Sorted String
  const sortedStringArray = Array(str.length);
  charArray.forEach((element, index) => {
    if (element !== 0) {
      const val = String.fromCharCode(index + charCodeOfA);
      sortedStringArray.push(val.repeat(element));
    }
  });
  console.log("sortedString", sortedStringArray.join(""));
};

getFrequencyInSortedWay("geeksforgeeks");

// console.log("a".charCodeAt(0));
