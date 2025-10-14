import React, { useReducer } from "react";


const reducer = (state,action) => {
    switch (action.type){
        case "increment":
            return state * 6;
    }
}

export default function CounterWithUseReducer(){
    const [state,dispatch] = useReducer(reducer,1);
    return<>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type : "increment"})}>increment</button>
    </>

}

