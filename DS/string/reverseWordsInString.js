const getReverseWordsInString = (str) => {
  let currenrStr = "";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr = newStr + " " + reverseStr(currenrStr);
      currenrStr = "";
    } else {
      currenrStr = currenrStr + str[i];
    }
  }
  newStr = newStr + " " + reverseStr(currenrStr);
  console.log(reverseStr(newStr));
};

const reverseStr = (str1) => {
  let str = str1;

  for (let index = 0; index < Math.floor(str.length / 2); index++) {
    let temp = str[index];
    str[index] = str[str.length - index - 1];
    str[str.length - index - 1] = temp;
    console.log({ temp, start: str[index], end: str[str.length - index - 1] });
    console.log({ str });
  }
  console.log(str);
  return str;

  //   return str.split("").reverse().join("");
};

// console.log("My Name Is Vinod".split(" ").reverse().join(" "));

// getReverseWordsInString("my name is vnod");

// str1
// str2

reverseStr("abc");
