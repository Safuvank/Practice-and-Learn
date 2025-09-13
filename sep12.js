function loadDataBase(id, callback) {
  let error;
  setTimeout(() => {
    if (error) {
      return callback(error);
    }
    console.log("Fetching user data...");
    setTimeout(() => {
      if (error) {
        return callback(error);
      }
      console.log("Fetching profile...");
      setTimeout(() => {
        // error = "Hey bro, I am the Error......"
        if (error) {
          return callback(error);
        }
        console.log("Fetching posts...");
        setTimeout(() => {
          if (error) {
            return callback(error);
          }
          console.log("Fetching comment box...");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

function errorHandler(error) {
  console.log("Error is found.......");
}

// loadDataBase("123", errorHandler);



//simplify method instead of above

function fetchDatabase(){
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                setTimeout(()=>{

                },2000)
            },2000)
        },2000)
    },2000)
}


// let prm = new Promise();
// console.log(prm);

// it is an error 
// we can must pass callback function in promise()

let prm1 = new Promise((resolve,reject)=>{
    console.log("Executor function in Executed...")
    reject("failure");
});

prm1.catch((result)=>{console.log("failed")})