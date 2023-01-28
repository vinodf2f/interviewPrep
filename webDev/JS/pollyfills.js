const promiseAll = async (promiseArr) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = [];
      let resolveCounter = 0;

      for (let index = 0; index < promiseArr.length; index++) {
        // Promise.resolve(
        promiseArr[index].then((currentResult) => {
          console.log(currentResult);
          resolveCounter++;
          result[index] = currentResult;

          if (resolveCounter === promiseArr.length) {
            console.log(">>");
            resolve(result);
          }
        });
        // );
        console.log({ result });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const dummyPromise1 = (count) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(count), 2000));

const dummyPromise2 = (count) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(count), 0));

const dummyPromise3 = (count) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(count), 0));

promiseAll([dummyPromise1(1), dummyPromise2(2), dummyPromise3(3)])
  .then((data) => console.log({ data }))
  .catch((err) => console.log({ err }));
