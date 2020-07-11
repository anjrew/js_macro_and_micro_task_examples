/* In this example we can see that all microtasks (Promises) 
get executed before any Microtasks (setTimeOut) */

// example.js
console.log("script start");

setTimeout(function () {
  console.log("setTimeout 1 MACro task");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1 MICro task");
  })
  .then(function () {
    console.log("promise2 MICro task");
  });

  Promise.resolve()
  .then(function () {
    console.log("promise3 MICro task");
  })
  .then(function () {
    console.log("promise4 MICro task");
  });

queueMicrotask(() => {
  console.log("Queued MICro task 1 is here");
});

setTimeout(function () {
  console.log("setTimeout 2 MACro task");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise5 MICro task");
  })
  .then(function () {
    console.log("promise6 MICro task");
  });

  Promise.resolve()
  .then(function () {
    console.log("promise7 MICro task");
  })
  .then(function () {
    console.log("promise8 MICro task");
  });

queueMicrotask(() => {
  console.log("Queued MICro task 2 is here");
});
console.log("script end");
