let userName: string = "safuvan";
let salary: number = 25000;

// userName = 12

function add (a:number, b:number): number {
    return a+ b
}

let result = add(10,20)
console.log(result)

// let value: string | number = "hello";

// value = 2000

// if (typeof value === "string") {
//   console.log(value);
// }

// if (typeof value === "string") {
//   console.log("string");
// }

let value: string | number;

value = Math.random() > 0.5 ? "hi" : 10;