const getPartianLabel = (string) => {
  const charMap = new Map();
  const result = [];

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    charMap.set(element, index);
  }
  let left = 0;
  let right = 0;
  let iterator = 0;

  while (iterator < string.length) {
    console.log(iterator);
    const char = string[iterator];
    right = Math.max(right, charMap.get(char));
    if (right === iterator) {
      result.push(string.slice(left, right));
      right++;
      left = right;
    }

    iterator++;
  }
  console.log({ result });
};

getPartianLabel("abdbandahghtigoilko");
