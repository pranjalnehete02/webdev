import React, { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
