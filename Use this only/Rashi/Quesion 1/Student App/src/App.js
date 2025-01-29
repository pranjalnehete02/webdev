import { useState, useEffect } from "react";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null); // Track student being edited

  // Load students from localStorage on mount
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) =>
        s.Rollno === updatedStudent.Rollno ? updatedStudent : s
      )
    );
    setEditStudent(null); // Clear edit mode after updating
  };

  const deleteStudent = (rollno) => {
    setStudents(students.filter((s) => s.Rollno !== rollno));
  };

  const handleEdit = (student) => {
    setEditStudent(student); // Set the student to be edited
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student CRUD Application</h1>

      {/* Student List */}
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        handleEdit={handleEdit}
      />

      {/* Student Form */}
      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
      />
    </div>
  );
}

export default App;
