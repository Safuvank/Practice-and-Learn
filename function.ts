function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

addTwoNumbers(5,20);


// function as a type

let greet: (name: string) => string

greet = function(name){
    return "Hello" + name
}