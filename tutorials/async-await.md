# Async & Await

Async/Await makes working with asynchronous code easier.

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await wait(1000);
  console.log("1 second passed");
}

run();
```
