const getLongestSubString = (str) => {
  let maxLength = -Infinity;
  const currentSubString = new Set();
  let start = 0;

  for (let index = 0; index < str.length; index++) {
    const element = str[index];

    while (currentSubString.has(element)) {
      currentSubString.delete(element);
      start++;
    }

    currentSubString.add(element);
    maxLength = Math.max(maxLength, index - start + 1);
  }
  console.log(maxLength);
};

getLongestSubString("bbbb");
