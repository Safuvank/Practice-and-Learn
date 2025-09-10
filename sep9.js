// Temporal Dead Zone

// console.log(c)

// let a = 10;

// var b = 50;

// not defined

// console.log(b)

// let  = 10;

function abc (){
    let a = 100;
    console.log(a);
}
// console.log(a);
// abc()

// syntaxError

// let c = 100;

// let c = 20

// console.log(c,c)

console.log("skfal");


//Exceptional Handling

//use in js 

// try
// catch
// finally

try{
    //code
}catch(error){
    //catching Error
}finally{
    //cleanup code
}


// another custom error handling
// throwing your own exception

// function validateAge(age){
//     if( age <0){
//         throw new Error ("Age can't be negative")
//     }
// }

// console.log(validateAge(-25))


// try cath finally 
// throw code malayalam

console.log("started");

let  d; 
try{
    console.log("one try")
    d= getvalue1();
}catch{
    console.log("inside catch")
    d = 0;
}

let e = getvalue2();

const result = sumValue(d,e)
console.log(result);

console.log("End")


function getvalue1(){
    abcd();
    return 32;
    
}

function getvalue2(){
    return 20;
}

function sumValue(d,e){
    return d + e;
}


{
    var f = 10;
    let g = 20;
    const h = 30;

    console.log(f,g,h)
}

//  console.log(h)


//shadowing 


var x = 51;

{
    console.log(x)
    var x = 60
    console.log(x)
}
console.log(x);

//illegal Shadowing

let z = 100;

{
    // var z = 20;
}

{
    //compound Statement
    var a = 1000;
    console.log(a);
}

// if(true) it's syntax error but it expected a statement

if(true) true; 

// if give multiple statement here we can use block

if(true){
    //compound Statement

    var a = 10 ;
    console.log(a);
}

//shadowing 

var a = 700;
console.log("first ",a)

{
    var a = 1500;
    let b = 200;
    const c = 300;

    console.log("second", a);
    console.log(b);
    console.log(c);
}

console.log("third",a);

// type Conversion

let u = 123;

console.log(u);

console.log(typeof u);