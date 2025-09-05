// less than 100?

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

function lessthan100(a,b){
    if((a+b)< 100){
        console.log("true");
    }else{
       console.log("false");
    }
}

lessthan100(50,50);


//swap the array

function swapArray(a,b){
    [a,b]=[b,a];
    console.log([a,b])
}

swapArray(10,20)


// convert minutes into Seconds

function convert(minutes) {
    console.log(minutes * 60)
}

convert(34)


// closure



function a (){
    b();
    function b(){
        console.log(x);
    }
}

let x = 10;

a();

// Largest number with sort method

function largerstNumber(arr){
    arr.sort((a,b)=>b - a);
    return arr[0];

}

console.log(largerstNumber([1,3,5,6,7,8,10]))

//largest number with for loop

function largestNumber1(arr){

    for(let i = 0; i<arr.length ; i++){
        if()
    }
}

console.log(largerstNumber1([1,3,5,6,7,8,10]))



