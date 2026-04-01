function fetchData(callback) {
  // setTimeout(() => {
  //     console.log("data fetched")
  //     callback()
  // }, 2000);
  console.log("fetch data");
  callback();
}

function processData() {
  console.log("processing data");
}

fetchData(processData);

//callback hell

const fun = step1(() => {
  step2(() => {
    console.log("step 2");
    step3(() => {
      console.log("step 3");
    });
  });
});


fun()