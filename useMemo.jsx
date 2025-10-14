import {useState, useMemo} from "react";

export default function ExpensiveComponent(){
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(4);

    const doubleNumber = useMemo(() =>{
        console.log("calculating...");
        return number*2;
    },[number])

    return(
        <>
        <p>Count : {count}</p>
        <p>Double : {number}</p>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setNumber(number + 1)}>number</button>
        </>
    )
}