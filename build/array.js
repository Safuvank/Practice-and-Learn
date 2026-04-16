"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// two method to define array in ts , first one is recommended way. second one is generic
const numbers = [2, 5, 6];
const numbers1 = [1, 34, 64, 34];
numbers.push(4);
// numbers.push("hi")
// add multiple data types
const numbers3 = ["safuvan", 12, false];
// array of objects
const usersDetails = [
    { name: "safuvan", age: 10 },
    { name: "suhail", age: 20 },
    { name: 10, age: 10 }
];
const employeeDetails = {
    Id: 10,
    name: "safuvan",
    skills: ["html", "css", "js"]
};
// employeeDetails.Id = 121;
employeeDetails.name = "suhail";
employeeDetails.skills.push("react");
//# sourceMappingURL=array.js.map