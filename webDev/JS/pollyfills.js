const promiseAll = async (promiseArr) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = [];

      for (let index = 0; index < promiseArr.length; index++) {
        const data = await promiseArr[index];
        result.push(data);
      }
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const dummyPromise1 = (count) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(count)));

const dummyPromise2 = (count) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(count)));

promiseAll([dummyPromise1(1), dummyPromise2(2)])
  .then((data) => console.log({ data }))
  .catch((err) => console.log({ err }));
