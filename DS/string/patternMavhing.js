const getIndexOfPatterenMatch = (str, pattern) => {
  const stringLength = str.length;
  const patternLength = pattern.length;

  for (let i = 0; i <= stringLength - patternLength; i++) {
    for (let j = 0; j < patternLength; j++) {
      console.log(str[i + j], i, j, pattern[j]);
      if (str[i + j] !== pattern[j]) {
        break;
      }
      if (j === patternLength - 1) {
        console.log({ i });
      }
    }
  }
};

getIndexOfPatterenMatch("abcdabcdabc", "abcd");
