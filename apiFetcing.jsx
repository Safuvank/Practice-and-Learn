import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(response.data)
  };
  
  useEffect(()=>{
    fetchUsers()
  },[])

  
  return <div>App</div>;
}

export default App;
