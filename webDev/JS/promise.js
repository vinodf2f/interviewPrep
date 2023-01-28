const obj = {
  value: "objValue",
  regularFunc: function () {
    console.log(this.value);
  },
  arrowFunc: () => {
    console.log(this.value);
  },
  nestedObj: function () {
    const text = "tetetet";
    dummyAsync().then(() => {
      console.log(this, ".,...");
    });
  },
};

function dummyAsync() {
  console.log(this, "thisss");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(this);
      resolve();
    }, 4000);
  });
}

obj.nestedObj();

obj.regularFunc();
