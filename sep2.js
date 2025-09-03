// // set
// // result must be unique

// // declare a set
// let numSet = new Set();

// // we can add values to array

// let numSet1 = new Set([1,2,3,4,5,6])

// // other type

// numSet1.add(12);
// numSet1.add(14);
// numSet1.add(13);
// console.log(numSet1);

// // arr

// let arrSet = new Set();
// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arrSet.add(JSON.stringify(arr1));
// arrSet.add(JSON.stringify(arr2));
// console.log(arrSet);


// let chainSet = new Set();
// chainSet.add(3).add(4).add(5).add(4);
// console.log(chainSet);
// console.log(chainSet.has(1));
// console.log(chainSet.has(4));
// console.log(chainSet.has(5));
// // console.log(chainSet.delete(5));
// // console.log(chainSet);
// // chainSet.clear();
// // console.log(chainSet);

// for(let num of chainSet){
//     console.log(num);
// }

// let createSet = new Set([1,2,3,4,5,4,5,3]);
// console.log(createSet);
// console.log(createSet.has(4))
// createSet.delete(3);
// console.log(createSet.size);
// const myArray = [...createSet]
// console.log(myArray)
// for (let num of createSet){
//     console.log(num);
// }

// createSet.forEach(x => console.log(x));

// const nums = [1,2,3,5,6,7,1,2,34,5];
// let unique = [...new Set(nums)]
// console.log(unique)

const str = "programming";
let uni = [...new Set(str)];
console.log(uni);