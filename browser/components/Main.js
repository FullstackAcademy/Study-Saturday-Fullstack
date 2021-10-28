import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  studentSelected,
  createStudent,
} from "../reducers/index.js";
import StudentList from "./StudentList.js";
import SingleStudent from "./SingleStudent.js";
import NewStudentForm from "./NewStudentForm";

const Main = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const students = useSelector((state) => state.students);
  const selectedStudent = useSelector((state) => state.selectedStudent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const selectStudent = (student) => {
    dispatch(studentSelected(student));
  };

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const addStudent = (studentInfo) => {
    dispatch(createStudent(studentInfo));
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
