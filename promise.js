const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    console.log("task completed");
  } else {
    console.log("task rejected");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));



// promise.all()l

const p1 = Promise.resolve(10);
const p2 = Promise.reject("Error");
const p3 = Promise.resolve(30);

Promise.allSettled([p1,p2,p3])
    .then(values => console.log(values))

    