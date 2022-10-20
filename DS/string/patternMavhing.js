const getIndexOfPatterenMatch = (str, pattern) => {
  const stringLength = str.length;
  const patternLength = pattern.length;

  for (let i = 0; i <= stringLength - patternLength; i++) {
    for (let j = 0; j <= i; j++) {
      console.log({ i, j });
      if (str[i + j] !== pattern[j]) {
        break;
      }
      if (j === patternLength) {
        console.log(i);
      }
    }
  }
};

getIndexOfPatterenMatch("abcdabcdabc", "abcd");
