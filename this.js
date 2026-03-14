// "use strict"

// function greet (){
//     console.log(this)
// }

// greet()

// CALL

// function greet(city) {
//   console.log("Hello, " + this.name + "from " + city);
// }

// const user = { name: "safuvan" };

// greet.call(user, "dubail");

// apply

function greet(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const user = { name: "Ali" };

greet.apply(user, ["Dubai", "UAE"]);



// CLASS INHERITANCE

class Animal {
   void speak(){
      System.out.println("Animal makes sound");
   }
}

class Dog extends Animal {
   void bark(){
      System.out.println("Dog barks");
   }
}