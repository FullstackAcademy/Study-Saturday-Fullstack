import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents, createStudent, studentSelected } from '../reducers';
import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false
    };
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  toggleForm = () => {
    const currentState = this.state.displayForm;
    this.setState({
      displayForm: !currentState
    });
  };

  render() {
    const { displayForm } = this.state;

    return (
      <div>
        <h1>Students</h1>
        <button onClick={this.toggleForm}>Add New Student</button>
        {displayForm ? (
          <NewStudentForm addStudent={this.props.createStudent} />
        ) : null}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.props.students}
            selectStudent={this.props.selectStudent}
          />
        </table>
        {this.props.selectedStudent.id ? (
          <SingleStudent student={this.props.selectedStudent} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state.students,
  selectedStudent: state.selectedStudent
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(fetchStudents()),
  createStudent: (studentInfo) => dispatch(createStudent(studentInfo)),
  selectStudent: (student) => dispatch(studentSelected(student))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
