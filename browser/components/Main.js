import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import StudentList from "./StudentList.js";
import SingleStudent from "./SingleStudent.js";
import NewStudentForm from "./NewStudentForm.js";

import { getStudents } from "../store";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: {},
      showStudent: false
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  componentDidMount() {
    this.props.getStudents();
  }

  // async getStudents() {
  //   console.log("fetching");
  //   try {
  //     const { data } = await axios.get("/student");
  //     this.setState({ students: data });
  //     console.log("THis is the State", this.state);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  async addStudent(newStudent) {
    try {
      const { data } = await axios.post("/student", newStudent);
      this.setState({
        students: [...this.state.students, data],
        showStudent: false
      });
    } catch (error) {
      console.log("error posting new student: ", error);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student
    });
  }

  handleClick(e) {
    return this.setState({
      showStudent: !this.state.showStudent
    });
  }

  render() {
    console.log("this is the state in main", this.state);
    return (
      <div>
        <h1>Students</h1>
        <button onClick={this.handleClick}>Add Student</button>
        {this.state.showStudent ? (
          <NewStudentForm addStudent={this.addStudent} />
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

const mapState = state => {
  return {
    students: state.students
  };
};

const mapDispatch = dispatch => {
  return {
    getStudents: () => dispatch(getStudents())
  };
};

export default connect(mapState, mapDispatch)(Main);
