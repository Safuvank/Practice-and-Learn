import React from 'react'


const Counter = ({count,setCount}) => {

  return (
    <div>
        <h3>Counter</h3>
        <h5>Current Value is</h5>
        <button>Increase</button>
        <button>Decrease</button>
    </div>
  )
}

export default Counter