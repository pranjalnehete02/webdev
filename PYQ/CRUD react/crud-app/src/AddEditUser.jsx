// AddEditUser.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddEditUser = ({ onSubmit, editingUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const validateForm = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    onSubmit(user);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className={`form-control ${errors.name && "is-invalid"}`}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone:</label>
            <input
              type="tel"
              className="form-control"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {editingUser ? "Update User" : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditUser;
