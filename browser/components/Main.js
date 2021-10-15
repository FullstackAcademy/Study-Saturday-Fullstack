import React, { Component } from "react";
import axios from "axios";

import StudentList from "./StudentList.js";
import SingleStudent from "./SingleStudent.js";
import NewStudentForm from "./NewStudentForm";

const Main = (props) => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const { data: students } = await axios.get("/api/students");
        setStudents(students);
      } catch (error) {
        console.error(error);
      }
    };
    getStudents();
  }, []);

  const selectStudent = (student) => {
    return setSelectedStudent(student);
  };

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  addStudent = async (studentInfo) => {
    try {
      const { data: student } = await axios.post("/api/students", studentInfo);
      this.setState({
        students: [...this.state.students, student],
      });
    } catch (error) {
      alert("Error adding student. Please try again.");
    }
  };

  return (
    <div>
      <h1>Students</h1>
      <button onClick={toggleForm}>Add New Student</button>
      {displayForm ? <NewStudentForm addStudent={addStudent} /> : null}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tests</th>
          </tr>
        </thead>
        <StudentList students={students} selectStudent={selectStudent} />
      </table>
      {selectedStudent.id ? <SingleStudent student={selectedStudent} /> : null}
    </div>
  );
};

export default Main;
