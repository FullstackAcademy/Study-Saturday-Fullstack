import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      displayForm: false
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents = async () => {
    try {
      const { data: students } = await axios.get('/api/students');
      this.setState({
        students
      });
    } catch (error) {
      console.error(error);
    }
  };

  selectStudent = (student) => {
    return this.setState({
      selectedStudent: student
    });
  };

  toggleForm = () => {
    const currentState = this.state.displayForm;
    this.setState({
      displayForm: !currentState
    });
  };

  addStudent = async (studentInfo) => {
    try {
      const { data: student } = await axios.post('/api/students', studentInfo);
      this.setState({
        students: [...this.state.students, student]
      });
    } catch (error) {
      alert('Error adding student. Please try again.');
    }
  };

  render() {
    const { displayForm } = this.state;

    return (
      <div>
        <h1>Students</h1>
        <button onClick={this.toggleForm}>Add New Student</button>
        {displayForm ? <NewStudentForm addStudent={this.addStudent} /> : ''}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
