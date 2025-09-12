let bigArray = new Array(1000000); 
bigArray[0] = 25;
bigArray[25] = 51
console.log(bigArray)

//constructor function

// function Person (name,age,place){
//     this.name = name ;
//     this.age = age;
//     this.place = place ;
//     return this.name = name;
// }

// const result = new Person("safuvan",23,"India");
// console.log(result);

// modern 

class Person1 {
    constructor(a,b){
        this.name = a ;
        this.age = b
    }

    greet(){
        return "Hi" + this.name;
    }
}

const res = new Person1("safuvan", 23);
console.log(res);

//
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hi ${this.name}`;
//   }
// }
// const p = new Person("Ali");
// console.log(p.greet())

function *fruits(){
    yield "apple"
    yield "mango"
    return 
}

const obj = fruits();
console.log(obj.next(),obj.next(),obj.next())


//currying 

function sum (a){
    return function (b){
        return function (c){
            return function (d){
                return function (e){
                    return a + b + c + d + e;
                }
            }
        }
    }
}

const result = sum(5)(6)(40)(50)
console.log(result(25))



