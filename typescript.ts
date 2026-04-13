// // infer types (IMPLICIT TYPED) automatically ditect the type

// let userName = "safuvan";

// userName = "safuv";

// // defining types

// let teacherName: string = "safuvan";

// let count: Number = 12;

// let users: string[] = ["safuvan", "muthu", "rahul"];

// let emptyArray: [] = [];

// let obj: User = {
//   name: "safuvn",
//   age: 20,
//   course: "mern",
//   salary: 21212,
//   getName() {
//     console.log(this.name);
//   },
// };

// interface User {
//   name: string;
//   age: number;
//   salary: number;
//   course: String;
//   getName: () => void;
// }

type User = {
  name: string;
  salary: number;
  course: String;
  getName: () => void;
};

let userDetails: User = {
  name: "safuvan",
  salary: 123123,
  course: "mern",
  getName() {
    console.log(this.name);
  },
};
