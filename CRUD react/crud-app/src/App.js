// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UserList from "./UserList";
import AddEditUser from "./AddEditUser";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            CRUD App
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/add">
              Add User
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <UserList
                users={users}
                deleteUser={deleteUser}
                setEditingUser={setEditingUser}
              />
            }
          />
          <Route
            path="/add"
            element={<AddEditUser onSubmit={addUser} editingUser={null} />}
          />
          <Route
            path="/edit"
            element={
              <AddEditUser onSubmit={updateUser} editingUser={editingUser} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
