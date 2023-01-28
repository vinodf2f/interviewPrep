// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets. ()
// Open brackets must be closed in the correct order.
// (), ()[]{}, (], {[()]} -> valid, valid, invalid, valid
// }{,  {[()]},  {}(), [{]}    -> invalid, valid, valid, invalid

function checkBrackets(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      stack.push(currentChar);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const lastChar = stack.pop();
      if (lastChar !== "(" && currentChar == ")") {
        return false;
      } else if (lastChar !== "{" && currentChar == "}") {
        return false;
      } else if (lastChar !== "[" && currentChar == "]") {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const result = checkBrackets("{({)}");
console.log({ result });
