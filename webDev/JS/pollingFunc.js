// Create a function which takes
// 1. Function to be executed
// 2. validated (If not valid call again )
// 3, max attempts after which reject promise
// 4. interval, after which we call the fun again

// And return a promise

const poll = (func, validatorCallback, maxAttempts) => {
  let attempts = 0;

  const executeCall = async (resolve, reject) => {
    const result = await func();
    attempts++;
    if (validatorCallback(result)) {
      resolve(result);
    } else if (attempts >= maxAttempts) {
      setTimeout(async () => {
        executeCall(resolve, reject);
      }, interval);
    } else reject("maxAttempts");
  };

  return new Promise((resolve, reject) => executeCall(resolve, reject));
};
