// Array destructuring

const { useState } = require("react");


const arr = [12,34,23,54];
const [a,b,c,d] = arr
console.log(d,c)

//Normal variable vs state

let normalCount = 0;
const [stateCount, setStateCount] = useState(0);

function increase () {
    normalCount++;
    setStateCount (stateCount + 1);
    console.log(normalCount,setStateCount)
}

increase();