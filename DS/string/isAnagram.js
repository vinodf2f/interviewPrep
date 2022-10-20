const isAnagram = (str1, str2) => {
  const strCharArray = Array(256).fill(0);
  const str1Length = str1.length;
  const str2Length = str2.length;

  if (str1Length !== str2Length) return false;

  for (let i = 0; i < str1Length; i++) {
    strCharArray[str1.charCodeAt(i)]++;
    strCharArray[str2.charCodeAt(i)]--;
  }

  return strCharArray.every((element) => element === 0);
};

const isAnagramVar = isAnagram("abc", "cab");

console.log({ isAnagramVar });
