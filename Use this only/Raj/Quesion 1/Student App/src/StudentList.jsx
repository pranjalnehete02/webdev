export default function StudentList({ students, deleteStudent, handleEdit }) {
  return (
    <div>
      <h2>Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.Rollno}>
              <td>{student.Rollno}</td>
              <td>{student.Name}</td>
              <td>{student.Phone}</td>
              <td>{student.State}</td>
              <td>
                <button
                  onClick={() => handleEdit(student)}
                  className="btn btn-warning me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteStudent(student.Rollno)}
                  className="btn btn-danger"
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
}
