var lengthOfLongestSubstring = function (s) {
  let currentSubStr = "";
  let longestSubString = "";

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    while (currentSubStr.includes(currentChar)) {
      currentSubStr = currentSubStr.substring(1);
    }
    currentSubStr += currentChar;

    if (longestSubString.length < currentSubStr.length) {
      longestSubString = currentSubStr;
    }
  }
  return longestSubString.length;
};

const res = lengthOfLongestSubstring("pwwkew");
console.log(res);
