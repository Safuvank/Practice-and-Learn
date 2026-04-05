const nums = [1, -3, 6, -3, 3, 6, 2, -6, 2];

const result = nums.filter((nums) => nums >= 0);

console.log(result);

// const trick = [1,2,3,4,6,3,0].filter(x => true)

// console.log(trick)

const words = ["hi", "hello", "cat", "javascript"];

const res = words.filter((word) =>
  word
    .split("")
    .map((char) => char > 4)
    .join(""),
);
console.log(res);

const word = "school";

console.log(word.length);

const number = [5, 10, 15];

