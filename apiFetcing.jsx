// import React, { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users",
//     );
//     setUsers(response.data)
//   };
  
//   useEffect(()=>{
//     fetchUsers()
//   },[])

  
//   return <div>App</div>;
// }

// export default App;


import { setHeapSnapshotNearHeapLimit } from 'node:v8'
import React from 'react'

function apiFetcing() {
  const [users,setUsers] = setState([])

  const fetchUser = async() =>{
    const response = await axios.get("lkj")
    setUsers(resoponse.data)
  }

  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <div>apiFetcing</div>
  )
}

export default apiFetcing