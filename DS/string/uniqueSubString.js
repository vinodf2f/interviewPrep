const getUniqueSubStringLength = (str) => {
  const uniqueStr = new Set(str);
  const uniqueStrLength = uniqueStr.size;

  return (uniqueStrLength * (uniqueStrLength + 1)) / 2;
};

function distinctSubstrings(S) {
  let count = 0;

  // Iterate through all possible starting positions of the substring
  for (let i = 0; i < S.length; i++) {
    // Use a Set to track the characters in the current substring
    let set = new Set();

    // Iterate through all possible ending positions of the substring
    for (let j = i; j < S.length; j++) {
      // Add the current character to the Set
      set.add(S[j]);

      // If the size of the Set is equal to the length of the substring,
      // it means that all characters in the substring are distinct, so increment the count
      if (set.size == j - i + 1) {
        count++;
      }
    }
  }

  return count;
}

// Example usage
let str = "gfftdtrig";
let substrings = distinctSubstrings(str);
console.log(substrings.length);

console.log(getUniqueSubStringLength(str));
