const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function (num) {
  return num * 2;
});

console.log(result);

function sayHello() {
  return "Hello";
}

function execute(f) {
  console.log(f());
}

execute(sayHello);

add(2, 3); // ✅ Works

function add(a, b) {
  console.log(a + b);
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));


function factorial(n){
    if(n===1) return 1;
    return n* factorial(n-1)
}

console.log(factorial(10))