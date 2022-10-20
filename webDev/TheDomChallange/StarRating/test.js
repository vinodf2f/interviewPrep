// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets. ()
// Open brackets must be closed in the correct order.
// (), ()[]{}, (], {[()]} -> valid, valid, invalid, valid
// }{,  {[()]},  {}(), [{]}    -> invalid, valid, valid, invalid

const isValidString = (givenString) => {
  const stringLength = givenString.length;

  let newString = "";
  let isValid = false;

  const pairsOfBrackets = new Map([
    ["[", "]"],
    ["(", ")"],
    ["{", "}"],
  ]);

  if (stringLength % 2 != 0) return false;

  //

  for (let i = 0; i < newString; i++) {
    const getIndexOppositeOf = newString.indexOf(
      pairsOfBrackets.get(givenString[i])
    );
    console.log({
      char: newString[i],
      op: pairsOfBrackets.get(newString[i]),
      indexOp: getIndexOppositeOf,
    });

    if (getIndexOppositeOf !== -1) {
      newString =
        newString + newString.split("").splice(getIndexOppositeOf, 1).join("");
      newString = newString + newString.split("").splice(i, 1).join("");
      // Find and delete
    } else newString = newString + newString[i];
  }

  if (newString === "") isValid = true;
  else isValid = false;
};

const result = isValidString("(]");
console.log(result);
