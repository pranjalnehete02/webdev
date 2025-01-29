import { useState, useEffect } from "react";

export default function StudentForm({
  addStudent,
  updateStudent,
  editStudent,
  setEditStudent,
}) {
  const [formData, setFormData] = useState({
    Rollno: "",
    Name: "",
    Phone: "",
    State: "",
  });

  // Populate form when editStudent changes
  useEffect(() => {
    if (editStudent) {
      setFormData(editStudent);
    } else {
      setFormData({
        Rollno: "",
        Name: "",
        Phone: "",
        State: "",
      });
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.Rollno ||
      !formData.Name ||
      !formData.Phone ||
      !formData.State
    ) {
      alert("All fields are required!");
      return;
    }

    if (isNaN(formData.Phone)) {
      alert("Phone must be a number");
      return;
    }

    if (editStudent) {
      // Update existing student
      updateStudent({
        ...formData,
        Phone: parseInt(formData.Phone),
      });
    } else {
      // Add new student
      addStudent({
        ...formData,
        Phone: parseInt(formData.Phone),
      });
    }

    // Clear form after submission
    setFormData({
      Rollno: "",
      Name: "",
      Phone: "",
      State: "",
    });
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">
          {editStudent ? "Edit Student" : "Add Student"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Roll No</label>
            <input
              type="text"
              className="form-control"
              name="Rollno"
              value={formData.Rollno}
              onChange={handleChange}
              readOnly={!!editStudent} // Disable editing Rollno in edit mode
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="number"
              className="form-control"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="State"
              value={formData.State}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary me-2">
            {editStudent ? "Update" : "Add"} Student
          </button>
          {editStudent && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditStudent(null)} // Clear edit mode
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
