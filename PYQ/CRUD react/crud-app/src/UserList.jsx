// UserList.jsx
import { Link } from "react-router-dom";

const UserList = ({ users, deleteUser, setEditingUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to="/edit"
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setEditingUser(user)}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
