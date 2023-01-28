const findIfSubSequence = (mainStr, str) => {
  let currrentCharIndex = 0;
  let isSubSequence = true;

  if (str.length === 0 || str.length > mainStr.length) return false;
  if (str.length === mainStr.length) return str === mainStr;

  for (let index = 0; index < str.length; index++) {
    const indexInMainStr = mainStr.indexOf(str[index]);
    if (indexInMainStr !== -1 && indexInMainStr >= currrentCharIndex) {
      currrentCharIndex = indexInMainStr;
    } else {
      isSubSequence = false;
      break;
    }
  }
  console.log(isSubSequence, "isSubSequence");
};

//best
const findIfSubSequence2 = (mainStr, str) => {
  let mainStrIndex = 0;
  let strIndex = 0;

  while (strIndex < str.length && mainStrIndex < mainStr.length) {
    console.log({ mainStrChar: mainStr[mainStrIndex], strChar: str[strIndex] });
    if (mainStr[mainStrIndex] === str[strIndex]) {
      strIndex++;
    }
    mainStrIndex++;
  }

  return str.length === strIndex;
};

const findIfSubSequencerecursive = (
  bigString,
  smallString,
  bigIndex = 0,
  smallIndex = 0
) => {
  if (smallString.length === smallIndex) return true;
  if (bigString.length === bigIndex) return false;

  if (smallString[smallIndex] === bigString[bigIndex]) {
    smallIndex++;
  }

  bigIndex++;

  return findIfSubSequencerecursive(
    bigString,
    smallString,
    bigIndex,
    smallIndex
  );
};

console.log(findIfSubSequencerecursive("abcdefgg", "agc"));

// ("age");
