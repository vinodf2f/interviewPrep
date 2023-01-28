const reverseString = (str) => {
  return str.split(" ").reverse().join(" ");
};

const result = reverseString("my name is vinod");
console.log({ result });
