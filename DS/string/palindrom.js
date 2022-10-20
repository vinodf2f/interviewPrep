const isPalindrom = (str) => {
  const stringLength = str.length;

  let isValid = true;

  [...str].every((element, index) => {
    console.log(">>>>", index);
    if (index >= stringLength / 2) return false;
    console.log(str[index], str[stringLength - index - 1]);
    if (str[index] !== str[stringLength - index - 1]) {
      return false;
    } else return true;
  });

  return isValid;
};

const isPal = (str) => {
  let indexFromLeft = 0;
  let indexFromRight = str.length - 1;
  while (indexFromLeft <= indexFromRight) {
    if (str[indexFromLeft] != str[indexFromRight]) {
      return false;
    }
    indexFromLeft++;
    indexFromRight--;
  }
  return true;
};

const s = isPal("abccba");
console.log(s);
