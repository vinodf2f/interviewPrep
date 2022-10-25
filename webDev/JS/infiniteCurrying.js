const add = (a) => {
  return (b) => {
    if (b) return add(a + b);
    return a;
  };
};

console.log(add(2)(3)(4)(), "add");
