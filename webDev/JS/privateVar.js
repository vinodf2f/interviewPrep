function Counter(initialVal) {
  let count = 0;

  const increment = () => {
    console.log(this, "this");
    count++;
  };

  const getCount = function () {
    console.log(this, "this getcount");

    return count;
  };

  return {
    increment,
    getCount,
  };
}

const counter = new Counter();

counter.increment();

console.log(counter.getCount());
