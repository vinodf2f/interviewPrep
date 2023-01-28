const flattenObj = (obj, parentKey) => {
  return Object.keys(obj).reduce((acc, key) => {
    const currentVal = obj[key];
    const newKey = parentKey ? `${parentKey}-${key}` : key;

    if (!Array.isArray(currentVal) && typeof currentVal === "object") {
      acc = {
        ...acc,
        ...flattenObj(currentVal, newKey),
      };
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});
};

var user = {
  name: "Vinod",
  address: {
    primary: {
      house: "109",
      street: {
        main: "21",
        cross: "32",
      },
    },
  },
};

console.log({ result: flattenObj(user) });
